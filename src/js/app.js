import orderByProps from './orderbyprops';

const obj = { name: "мечник", health: 10, level: 2, attack: 80, defence: 40 };
const res = orderByProps(obj, ["name", "level"]);
console.log(res);
