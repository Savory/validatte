// deno-lint-ignore-file no-explicit-any

import { DecoratorFunction } from '../decorator-function.ts';
import { createTypeValidator, createValidator } from '../validate.ts';

/**
 * Validates if the target property is of type string.
 *
 * @param target - The target object.
 * @param propertyKey - The name of the property to validate.
 *
 * @example
 * ```typescript
 * class Example {
 *   @IsString
 *   public name: string;
 * }
 * ```
 */
export const IsString: DecoratorFunction = createTypeValidator('string');
/**
 * Validates if the target property is of type number.
 *
 * @param target - The target object.
 * @param propertyKey - The name of the property to validate.
 *
 * @example
 * ```typescript
 * class Example {
 *   @IsNumber
 *   public name: number;
 * }
 * ```
 */
export const IsNumber: DecoratorFunction = createTypeValidator('number');
/**
 * Validates if the target property is of type big int.
 *
 * @param target - The target object.
 * @param propertyKey - The name of the property to validate.
 *
 * @example
 * ```typescript
 * class Example {
 *   @IsBigint
 *   public name: bigint;
 * }
 * ```
 */
export const IsBigint: DecoratorFunction = createTypeValidator('bigint');
/**
 * Validates if the target property is of type boolean.
 *
 * @param target - The target object.
 * @param propertyKey - The name of the property to validate.
 *
 * @example
 * ```typescript
 * class Example {
 *   @IsBoolean
 *   public name: boolean;
 * }
 * ```
 */
export const IsBoolean: DecoratorFunction = createTypeValidator('boolean');
/**
 * Validates if the target property is a function.
 *
 * @param target - The target object.
 * @param propertyKey - The name of the property to validate.
 *
 * @example
 * ```typescript
 * class Example {
 *   @IsFunction
 *   public name: Function;
 * }
 * ```
 */
export const IsFunction: DecoratorFunction = createTypeValidator('function');
/**
 * Validates if the target property is an object.
 *
 * @param target - The target object.
 * @param propertyKey - The name of the property to validate.
 *
 * @example
 * ```typescript
 * class Example {
 *   @IsObject
 *   public name: any;
 * }
 * ```
 */
export const IsObject: DecoratorFunction = createTypeValidator('object');
/**
 * Validates if the target property is a symbol.
 *
 * @param target - The target object.
 * @param propertyKey - The name of the property to validate.
 *
 * @example
 * ```typescript
 * class Example {
 *   @IsSymbol
 *   public name: Symbol;
 * }
 * ```
 */
export const IsSymbol: DecoratorFunction = createTypeValidator('symbol');
/**
 * Validates if the target property is undefined.
 *
 * @param target - The target object.
 * @param propertyKey - The name of the property to validate.
 *
 * @example
 * ```typescript
 * class Example {
 *   @IsUndefined
 *   public name: undefined;
 * }
 * ```
 */
export const IsUndefined: DecoratorFunction = createTypeValidator('undefined');
/**
 * Validates if the target property is an array.
 *
 * @param target - The target object.
 * @param propertyKey - The name of the property to validate.
 *
 * @example
 * ```typescript
 * class Example {
 *   @IsArray
 *   public name: string[];
 * }
 * ```
 */
export const IsArray: DecoratorFunction = createValidator(() => (prop: any) => Array.isArray(prop), 'Property is not an array');
