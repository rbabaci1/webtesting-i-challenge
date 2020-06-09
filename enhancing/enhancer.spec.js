const { repair, succeed } = require("./enhancer.js");

const item1 = { name: "game-1", enhancement: 10, durability: 35 };
const item2 = { name: "game-2", enhancement: 20, durability: 35 };

describe("enhancement functions", () => {
  describe("repair()", () => {
    it("restores the durability to 100", () => {
      const expected = { name: "game-1", enhancement: 10, durability: 100 };

      expect(repair(item1)).toMatchObject(expected);
    });
  });

  describe("succeed()", () => {
    it("enhance the item on success", () => {
      const expected1 = { name: "game-1", enhancement: 11, durability: 35 };
      const expected2 = { name: "game-2", enhancement: 20, durability: 35 };

      expect(succeed(item1)).toMatchObject(expected1);
      expect(succeed(item2)).toMatchObject(expected2);
    });
  });
});
