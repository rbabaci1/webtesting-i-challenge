const { repair, succeed, fail, get } = require("./enhancer.js");

describe("enhancement functions", () => {
  describe("repair()", () => {
    it("restores the durability to 100", () => {
      const actual = { name: "game-1", enhancement: 10, durability: 35 };
      const expected = { name: "game-1", enhancement: 10, durability: 100 };

      expect(repair(actual)).toMatchObject(expected);
    });
  });

  describe("succeed()", () => {
    it("updates enhancement the item on success", () => {
      const actual1 = { name: "game-1", enhancement: 10, durability: 35 };
      const actual2 = { name: "game-2", enhancement: 20, durability: 35 };

      const expected1 = { name: "game-1", enhancement: 11, durability: 35 };
      const expected2 = { name: "game-2", enhancement: 20, durability: 35 };

      expect(succeed(actual1)).toMatchObject(expected1);
      expect(succeed(actual2)).toMatchObject(expected2);
    });
  });

  describe("updates durability and enhancement on failure", () => {
    const actual1 = { name: "game-1", enhancement: 10, durability: 35 };
    const actual2 = { name: "game-2", enhancement: 20, durability: 35 };
    const actual3 = { name: "game-3", enhancement: 15, durability: 35 };

    const expected1 = { name: "game-1", enhancement: 10, durability: 30 };
    const expected2 = { name: "game-2", enhancement: 19, durability: 35 };
    const expected3 = { name: "game-3", enhancement: 15, durability: 25 };

    expect(fail(actual1)).toMatchObject(expected1);
    expect(fail(actual2)).toMatchObject(expected2);
    expect(fail(actual3)).toMatchObject(expected3);
  });

  describe("updates name depending on enhancement level", () => {
    const actual1 = { name: "game-1", enhancement: 0, durability: 35 };
    const actual2 = { name: "game-1", enhancement: 10, durability: 35 };

    const expected = { name: "[+10] game-1", enhancement: 10, durability: 35 };

    expect(get(actual1)).toMatchObject(actual1);
    expect(get(actual2)).toMatchObject(expected);
  });
});
