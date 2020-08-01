/* Reverse is mutable method */
function reverse(string: string): string
function reverse<T>(array: T[]): T[]
function reverse(stringOrArray: string | string[]) {
  if (typeof stringOrArray === 'string') {
    return [...stringOrArray].reverse().join()
  }
  return stringOrArray.slice().reverse()
}

const reversedString = reverse('Typescript')
const reversedArray = reverse([1, 2, 3, 4, 5])
