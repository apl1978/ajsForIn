export default function orderByProps(obj, order) {
  let res = [];

  const objKeys = Object.keys(obj).sort();
  objKeys.forEach((elem) => {
    if (!order.includes(elem)) {
      order.push(elem);
    }
  });

  order.forEach((elem) => {
    res.push({ key: elem, value: obj[elem] });
  });

  return res;
}