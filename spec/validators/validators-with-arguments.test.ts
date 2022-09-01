import { IsNumber, IsString } from "../../validators/types-validators.ts";
import { validateObject } from "../../validate.ts";
import { assertEquals } from "https://deno.land/std@0.135.0/testing/asserts.ts";
import { LengthGreater } from "../../validators/string.ts";

class User {
  @IsString()
  @LengthGreater(5)
  name?: string;
}

Deno.test("Validator with arguments", () => {
  const wrongUserDataFromOutsideOurApp = { name: "toto" };
  assertEquals(
    validateObject(wrongUserDataFromOutsideOurApp, User),
    [{
      property: "name",
      errorMessage: `Length must be greater than 5`,
      constraints: [5],
    }],
  );
});
