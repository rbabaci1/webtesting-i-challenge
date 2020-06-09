const succeed = item => {
  item.enhancement !== 20 && (item.enhancement += 1);

  return item;
};

const fail = item => {
  item.enhancement < 15
    ? (item.durability -= 5)
    : item.enhancement > 16
    ? (item.enhancement -= 1)
    : (item.durability -= 10);

  return item;
};

const repair = item => ({ ...item, durability: 100 });

const get = item => {
  return item.enhancement === 0
    ? item
    : item.enhancement > 0
    ? { ...item, name: `[+${item.enhancement}] ${item.name}` }
    : null;
};

module.exports = { succeed, fail, repair, get };
