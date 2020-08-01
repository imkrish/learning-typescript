let autoComplete: 'on' | 'off' = 'on'
autoComplete = 'off'
autoComplete = 'disabled'

const autoCompleteConst = 'on'

type NumberBase = 2 | 8 | 10 | 16
let base: NumberBase
base = 2
base = 3

type HTTPSuccessStatusCode = 200 | 201 | 202 | 203 | 204

let autoFocus = true

enum Protocols {
  HTTP,
  HTTPS,
  FTP,
}

type HypertextProtocol = Protocols.HTTP | Protocols.HTTPS
let protocol: HypertextProtocol
protocol = Protocols.HTTPS
protocol = Protocols.HTTP
protocol = Protocols.FTP
