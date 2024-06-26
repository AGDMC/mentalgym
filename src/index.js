export function myMap(collection, func) {
  let accumulator = [];
  for (let i = 0; i < collection.length; i++) {
    accumulator.push(func(collection[i]));
  }
  return accumulator;
}
