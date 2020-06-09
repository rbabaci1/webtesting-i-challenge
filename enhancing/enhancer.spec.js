const { repair, succeed, fail, get } = require("./enhancer.js");

afterEach(() => {
  actual1 = { name: "game-1", enhancement: 10, durability: 35 };
  actual2 = { name: "game-2", enhancement: 20, durability: 35 };
  actual3 = { name: "game-3", enhancement: 15, durability: 35 };
  actual4 = { name: "game-4", enhancement: 0, durability: 35 };
});

let actual1 = { name: "game-1", enhancement: 10, durability: 35 };
let actual2 = { name: "game-2", enhancement: 20, durability: 35 };
let actual3 = { name: "game-3", enhancement: 15, durability: 35 };
let actual4 = { name: "game-4", enhancement: 0, durability: 35 };

describe("enhancement functions", () => {
  describe("repair()", () => {
    it("restores the durability to 100", () => {
      const expected = { name: "game-1", enhancement: 10, durability: 100 };

      expect(repair(actual1)).toMatchObject(expected);
    });
  });

  describe("succeed()", () => {
    it("updates enhancement the item on success", () => {
      const expected1 = { name: "game-1", enhancement: 11, durability: 35 };
      const expected2 = { name: "game-2", enhancement: 20, durability: 35 };

      expect(succeed(actual1)).toMatchObject(expected1);
      expect(succeed(actual2)).toMatchObject(expected2);
    });
  });

  describe("fail()", () => {
    it("updates durability and enhancement on failure", () => {
      const expected1 = { name: "game-1", enhancement: 10, durability: 30 };
      const expected2 = { name: "game-2", enhancement: 19, durability: 35 };
      const expected3 = { name: "game-3", enhancement: 15, durability: 25 };

      expect(fail(actual1)).toMatchObject(expected1);
      expect(fail(actual2)).toMatchObject(expected2);
      expect(fail(actual3)).toMatchObject(expected3);
    });
  });

  describe("get()", () => {
    it("updates name depending on enhancement level", () => {
      const expected = {
        name: "[+10] game-1",
        enhancement: 10,
        durability: 35,
      };

      expect(get(actual4)).toMatchObject(actual4);
      expect(get(actual1)).toMatchObject(expected);
    });
  });
});
