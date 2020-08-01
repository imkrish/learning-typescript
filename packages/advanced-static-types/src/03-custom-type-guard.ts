const numbers = [0, 1, 2, [3, 4], 5, [6], [7], 8, [9], [[99, 99, 99]]]

function flatten<T>(
  array: (T | T[] | T[][] | T[][][] | T[][][][])[] | T[][][]
): T[] {
  const flattened: T[] = []

  for (const element of array) {
    // isArray is type guard
    // isArray(arg: any): arg is any[];
    if (Array.isArray(element)) {
      flattened.push(...flatten(element))
    } else {
      flattened.push(element)
    }
  }

  return flattened
}

console.log(flatten(numbers))

function isFlat<T>(
  array: (T | T[] | T[][] | T[][][] | T[][][][])[] | T[][][]
): array is T[] {
  return !array.some(Array.isArray)
}

if (isFlat(numbers)) {
  numbers
} else {
  numbers
}
