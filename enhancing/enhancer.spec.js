const { repair, succeed, fail, get } = require("./enhancer.js");
let mockData = require("../mockData");

const initialData = JSON.parse(JSON.stringify(mockData));

afterEach(() => {
  mockData = JSON.parse(JSON.stringify(initialData));
});

describe("enhancement functions", () => {
  describe("repair()", () => {
    it("restores the durability to 100", () => {
      const expected = { name: "game-1", enhancement: 10, durability: 100 };

      expect(repair(mockData[0])).toMatchObject(expected);
    });
  });

  describe("succeed()", () => {
    it("updates enhancement the item on success", () => {
      const expected1 = { name: "game-1", enhancement: 11, durability: 35 };
      const expected2 = { name: "game-2", enhancement: 20, durability: 35 };

      expect(succeed(mockData[0])).toMatchObject(expected1);
      expect(succeed(mockData[1])).toMatchObject(expected2);
    });
  });

  describe("fail()", () => {
    it("updates durability and enhancement on failure", () => {
      const expected1 = { name: "game-1", enhancement: 10, durability: 30 };
      const expected2 = { name: "game-2", enhancement: 19, durability: 35 };
      const expected3 = { name: "game-3", enhancement: 15, durability: 25 };

      expect(fail(mockData[0])).toMatchObject(expected1);
      expect(fail(mockData[1])).toMatchObject(expected2);
      expect(fail(mockData[2])).toMatchObject(expected3);
    });
  });

  describe("get()", () => {
    it("updates name depending on enhancement level", () => {
      const expected = {
        name: "[+10] game-1",
        enhancement: 10,
        durability: 35,
      };

      expect(get(mockData[3])).toMatchObject(mockData[3]);
      expect(get(mockData[0])).toMatchObject(expected);
    });
  });
});
