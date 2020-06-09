const { repair } = require("./enhancer.js");

const item = { name: "game-1", enhancement: 10, durability: 35 };

// test away!
describe("enhancement functions", () => {
  describe("repair()", () => {
    it("restores the durability to 100", () => {
      const expected = { name: "game-1", enhancement: 10, durability: 100 };

      expect(repair(item)).toMatchObject(expected);
    });
  });
});
