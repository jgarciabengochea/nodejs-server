const {
  isUnique,
  isPermutation,
  URLifyBuiltIn,
  URLify,
  checkPalindromePermutation,
  oneAway,
  compressString,
} = require("./index.js");

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

describe("URLify", () => {
  it("returns a URLified version of a string", () => {
    const expected = "Mr%20John%20Smith";
    const result1 = URLifyBuiltIn("Mr John Smith    ", 13);
    expect(result1).toBe(expected);
    const result2 = URLify("Mr John Smith    ", 13);
    expect(result2).toBe(expected);
  });
});

describe("checkPalindromePermutation", () => {
  it("finds palindrome permutations for even length strings", () => {
    expect(checkPalindromePermutation("aba b")).toBe(true);
    expect(checkPalindromePermutation("  jjjaba jbjj")).toBe(true);
  });

  it("finds palindrome permutations for odd length strings", () => {
    expect(checkPalindromePermutation("Tact Coa")).toBe(true);
    expect(checkPalindromePermutation("Toact Coao")).toBe(true);
  });

  it("returns false when the input is not a permutation of a palindrome", () => {
    expect(checkPalindromePermutation("Tact Coahhh")).toBe(false);
  });

  it("returns false for empty strings", () => {
    expect(checkPalindromePermutation("")).toBe(false);
  });
});

describe("oneAway", () => {
  it("returns true for one insert", () => {
    expect(oneAway("pale", "ple")).toBe(true);
  });

  it("returns true for one removal", () => {
    expect(oneAway("pales", "pale")).toBe(true);
  });

  it("returns true for one replacement", () => {
    expect(oneAway("pale", "bale")).toBe(true);
  });

  it("returns true for the same string", () => {
    expect(oneAway("pale", "pale")).toBe(true);
  });

  it("returns false when strings are two edits away", () => {
    expect(oneAway("pale", "bake")).toBe(false);
  });
});

describe("compressString", () => {
  it("compresses a string", () => {
    expect(compressString("aabcccccaaa")).toBe("a2b1c5a3");
  });
  it("returns the original string if the compressed string would be equal length or longer", () => {
    expect(compressString("abcdefg")).toBe("abcdefg");
    expect(compressString("aabcccaa")).toBe("aabcccaa");
  });
  it("is case sensitive", () => {
    expect(compressString("aabcccCCaaa")).toBe("a2b1c3C2a3");
  });
});
