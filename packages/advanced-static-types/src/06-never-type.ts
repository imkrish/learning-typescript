const sing = () => {
  while (true) {
    console.log('Never')
  }
}

const fail = () => {
  throw new Error('Fail')
}

function never(): never {
  while (true) {
    break
  }
}

const result = sing()

function trimAndLower2(text: string | null) {
  if (typeof text === 'string') {
    return text.trim().toLowerCase()
  }

  if (!text) {
    return text
  }

  return text
}

enum ShirtSize {
  S,
  M,
  L,
  XL,
  XXL,
}

function assertNever(value: never): never {
  throw Error(`Unexpected value ${value}`)
}

function prettyPrint(size: ShirtSize) {
  switch (size) {
    case ShirtSize.L:
    case ShirtSize.M:
    case ShirtSize.S:
    case ShirtSize.XL: {
      console.log('size')
      break
    }
    default:
      assertNever(size)
  }
}
