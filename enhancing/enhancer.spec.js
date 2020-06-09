const { repair, succeed, fail } = require("./enhancer.js");

afterEach(() => {
  item1 = { name: "game-1", enhancement: 10, durability: 35 };
  item2 = { name: "game-2", enhancement: 20, durability: 35 };
  item3 = { name: "game-3", enhancement: 15, durability: 35 };
});

let item1 = { name: "game-1", enhancement: 10, durability: 35 };
let item2 = { name: "game-2", enhancement: 20, durability: 35 };
let item3 = { name: "game-3", enhancement: 15, durability: 35 };

describe("enhancement functions", () => {
  describe("repair()", () => {
    it("restores the durability to 100", () => {
      const expected = { name: "game-1", enhancement: 10, durability: 100 };

      expect(repair(item1)).toMatchObject(expected);
    });
  });

  describe("succeed()", () => {
    it("updates enhancement the item on success", () => {
      const expected1 = { name: "game-1", enhancement: 11, durability: 35 };
      const expected2 = { name: "game-2", enhancement: 20, durability: 35 };

      expect(succeed(item1)).toMatchObject(expected1);
      expect(succeed(item2)).toMatchObject(expected2);
    });
  });

  describe("updates durability and enhancement on failure", () => {
    const expected1 = { name: "game-1", enhancement: 10, durability: 30 };
    const expected2 = { name: "game-2", enhancement: 19, durability: 35 };
    const expected3 = { name: "game-3", enhancement: 15, durability: 25 };

    expect(fail(item1)).toMatchObject(expected1);
    expect(fail(item2)).toMatchObject(expected2);
    expect(fail(item3)).toMatchObject(expected3);
  });
});
