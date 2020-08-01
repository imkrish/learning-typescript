type Primitive = boolean | number | string | symbol | null | undefined

/* object type is not a primitive type */
let obj: object
obj = true
obj = 42
obj = 'foo'
obj = Symbol()
obj = null
obj = undefined

obj = {}
obj = []
obj = Math.random

Object.create(42)

/* Object comes with general object methods (Useful for autocomplete) */
const object2: Object = {}
object2.toString()
object2.hasOwnProperty('foo')
obj.foo = 'bar'

const object3: { [key: string]: any } = {}
object3.foo = 'bar' +
    ''
