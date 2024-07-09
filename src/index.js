export function myMap(collection, func) {
  return collection.reduce(
    (accumulator, currentValue) => [...accumulator, func(currentValue)],
    []
  );
}
