function trimAndLower(text: string | null | undefined) {
  text
  if (typeof text === 'string') {
    text
    return text.trim().toLowerCase()
  }
  text
  return text
}

function trimAndLower2(text: string | null | undefined) {
  text
  if (!text) {
    text
    return text
  }
  text
  return text.trim().toLowerCase()
}

function trimAndLower3(text: string | null | undefined) {
  return typeof text === 'string' ? text.trim().toLowerCase() : text
}

let foo: number
console.log(foo)

let bar: number | undefined
console.log(bar)

bar = 42
bar
bar.toExponential()
bar = undefined
bar
bar.toExponential()
