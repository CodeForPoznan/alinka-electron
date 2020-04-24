import { isPeselValid } from "./validators";

describe("Validators", () => {
  it("returns valid pesel", () => {
    expect(isPeselValid("64042999928")).toBeUndefined();
  });

  it("return Type PESEL because of no value", () => {
    expect(isPeselValid(undefined)).toBe("Type PESEL");
  });

  it("return Type PESEL because of too short text", () => {
    expect(isPeselValid("9703100302")).toBe("Type PESEL");
  });

  it("return Invalid PESEL because of wrong numbers", () => {
    expect(isPeselValid("97031003021")).toBe("Invalid PESEL");
  });
});
