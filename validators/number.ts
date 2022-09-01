import { constraintKey, createValidator } from '../validate.ts';
import { greater, greaterOrEqual, lower, lowerOrEqual } from '../behaviors/number.ts';

export const GreaterOrEqual = createValidator(
  greaterOrEqual,
  `Number must be greater or equal than ${constraintKey}1`,
);
export const Greater = createValidator(
  greater,
  `Number must be greater than ${constraintKey}1`,
);
export const LowerOrEqual = createValidator(
  lowerOrEqual,
  `Number must be lower or equal than ${constraintKey}1`,
);
export const Lower = createValidator(
  lower,
  `Number must be lower than ${constraintKey}1`,
);