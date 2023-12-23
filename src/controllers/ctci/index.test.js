const { isUnique } = require("./index.js");

describe("isUnique", () => {
  it("returns true", () => {
    const result = isUnique();
    expect(result).toBe(true);
  });
});
