import { createValidator } from '../validate.ts';
import { isPhoneNumber } from '../behaviors/phone-number.ts';

export const IsPhoneNumber = createValidator(isPhoneNumber, 'String is not a local phone number from $constraint1');
