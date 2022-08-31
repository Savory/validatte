import { IsNumber, IsString } from "../../validators/types-validators.ts";
import { validateObject } from "../../validate.ts";
import { assertEquals } from "https://deno.land/std@0.135.0/testing/asserts.ts";

class User {
  @IsString()
  name?: string;

  @IsNumber()
  age?: number;
}

Deno.test("Type validator", () => {
  const wrongUserDataFromOutsideOurApp = { name: 3, age: "toto" };
  assertEquals(
    validateObject(wrongUserDataFromOutsideOurApp, User),
    [{ property: "name", errorMessage: `Property must be a string`, constraints: []}, {
      property: "age",
      errorMessage: `Property must be a number`,
      constraints: []
    }],
  );
});
