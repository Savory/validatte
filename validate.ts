// deno-lint-ignore-file no-explicit-any

import { plainToClass } from "./transform.ts";
import { ValidateFunction, ValidateFunctionOptions, ValidateInfo, ValidateSymbol, Validator } from './types.ts';
import { createErrorMessage } from './errors.ts';

export const constraintKey = `$constraint`;


export const createDecorator = (
  validatorFunction: ValidateFunction,
  validatorOption: ValidateFunctionOptions,
): PropertyDecorator => {
  // deno-lint-ignore ban-types
  return (target: Object, propertyKey: PropertyKey) => {
    if (typeof propertyKey === "string") {
      if (
        Object.getOwnPropertyDescriptor(target, ValidateSymbol) === undefined
      ) {
        Object.defineProperty(target, ValidateSymbol, {
          enumerable: false,
          value: {},
        });
      }
      const info: ValidateInfo = Object.getOwnPropertyDescriptor(
        target,
        ValidateSymbol,
      )?.value;

      const propInfo = info[propertyKey];
      const validator: Validator = {
        behavior: validatorFunction,
        options: validatorOption,
      };

      if (propInfo) {
        propInfo.push(validator);
      } else {
        info[propertyKey] = [validator];
      }
    }
  };
};


export const validateObject = <T extends abstract new (...args: any[]) => any>(
  obj: any,
  Class: T,
  ...classParams: ConstructorParameters<T>
): InstanceType<T> | any[] => {
  const validators = Object.getOwnPropertyDescriptor(
    Class.prototype,
    ValidateSymbol,
  )
    ?.value as ValidateInfo | undefined;

  const emptyInstance = Reflect.construct(Class, classParams);

  obj = { ...emptyInstance, ...obj };

  if (validators === undefined) {
    return [];
  }
  const errors: any[] = [];
  Object.getOwnPropertyNames(obj).forEach((property) => {
    const propertyValidators = validators[property];

    if (propertyValidators) {
      for (const validator of propertyValidators.reverse()) {
        try {
          const passValidation = validator.behavior(obj[property]);
          if (!passValidation) {
            errors.push({
              property,
              errorMessage: createErrorMessage(validator.options),
              constraints: validator.options?.constraints
            });
          }
        } catch {
          errors.push({
            property,
            errorMessage: createErrorMessage(validator.options),
            constraints: validator.options?.constraints
          });
        }
      }
    } else {
      errors.push({
        property,
        errorMessage: "Missing behavior",
      });
    }
  });

  if (errors.length > 0) {
    return errors;
  }
  return plainToClass(obj, Class);
};

export const createTypeValidator = (typeName: string) =>
  createValidator(() => {
    // deno-lint-ignore valid-typeof
    return (prop) => typeof prop === typeName;
  }, `Property must be a ${typeName}`);

export const createValidator = <T extends Array<any>>(
  validatorFunction: (...args: T) => ValidateFunction,
  errorMessage: string,
) => {
  return (...args: T) => {
    return createDecorator(validatorFunction(...args), { errorMessage, constraints: [...args] });
  };
};
