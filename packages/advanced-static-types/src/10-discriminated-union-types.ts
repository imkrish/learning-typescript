type Result<T> =
  | {
      success: true
      value: T
    }
  | { success: false; error: string }

function tryParseInt(text: string): Result<number> {
  if (/^-?\d+$/.test(text)) {
    return {
      success: true,
      value: parseInt(text, 10),
    }
  }

  return {
    success: false,
    error: 'Invalid number format',
  }
}

const result2 = tryParseInt('-1')
if (result2.success) {
  result2
  console.log(result2.value)
  result2.error
} else {
  result2
  console.log(result2.error)
  result2.value
}

interface Cash {
  kind: 'cash'
}

interface Paypal {
  kind: 'paypal'
  email: string
}

interface CreditCard {
  kind: 'creditcard'
  cardNumber: string
  securityCode: string
}

type PaymentMethod = Cash | Paypal | CreditCard

function stringifyPaymentMethod(method: PaymentMethod) {
  switch (method.kind) {
    case 'cash': {
      method
      return 'Cash'
    }
    case 'creditcard': {
      method
      return `Credit Card ${method.cardNumber} ${method.securityCode}`
    }
    case 'paypal': {
      method
      return `Paypal ${method.email}`
    }
  }
}
