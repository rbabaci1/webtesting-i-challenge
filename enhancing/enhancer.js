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

function get(item) {
  return { ...item };
}

module.exports = { succeed, fail, repair, get };
