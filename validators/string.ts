import { constraintKey, createValidator } from "../validate.ts";
import {
  isEmail,
  isRegex,
  lengthGreater,
  lengthGreaterOrEqual,
  lengthLower,
  lengthLowerOrEqual,
} from "../behaviors/string.ts";

export const LengthGreaterOrEqual = createValidator(
  lengthGreaterOrEqual,
  `Length must be greater or equal than ${constraintKey}1`,
);
export const LengthGreater = createValidator(
  lengthGreater,
  `Length must be greater than ${constraintKey}1`,
);
export const LengthLowerOrEqual = createValidator(
  lengthLowerOrEqual,
  `Length must be lower or equal than ${constraintKey}1`,
);
export const LengthLower = createValidator(
  lengthLower,
  `Length must be lower than ${constraintKey}1`,
);
export const IsRegex = createValidator(
  isRegex,
  `String does not validate regex: ${constraintKey}1`,
);
export const IsEmail = createValidator(isEmail, `String is not an email`);
