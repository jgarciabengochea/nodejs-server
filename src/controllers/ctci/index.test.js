const { isUnique, isPermutation } = require("./index.js");

describe("isUnique", () => {
  it("returns true", () => {
    const result = isUnique();
    expect(result).toBe(true);
  });
});

describe("isPermutation", () => {
  it("returns true for permutations", () => {
    const result = isPermutation("code", "odec");
    expect(result).toBe(true);
  });

  it("returns false for strings of different sizes", () => {
    const result = isPermutation("code", "odecca");
    expect(result).toBe(false);
  });

  it("returns true for strings with matching duplicate chars", () => {
    const result = isPermutation("coode", "oodec");
    expect(result).toBe(true);
  });

  it("returns false for strings with the same chars but different duplicates", () => {
    const result = isPermutation("coode", "oddec");
    expect(result).toBe(false);
  });

  it("is case sensitive", () => {
    const result = isPermutation("coDe", "odEc");
    expect(result).toBe(false);
  });

  it("is whitespace sensitive", () => {
    const result1 = isPermutation("co  de    ", "odec");
    expect(result1).toBe(false);

    const result2 = isPermutation("co  de    ", "  o   d ec");
    expect(result2).toBe(true);
  });
});
