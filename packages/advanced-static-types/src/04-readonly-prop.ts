interface User {
  readonly id: number
  name: string
}

const user: User = {
  id: 42,
  name: 'Marius',
}

user.id++
user.name += 'Foo'

class UserClass {
  constructor(public readonly id: number, public name: string) {}
}

const user2 = new UserClass(42, 'Foo')
user2.name = 'test'
user2.id++

const weekdays: ReadonlyArray<string> = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
weekdays[0] = 'Something'
weekdays.length = 0
// ReadonlyArray only expose immutable array methods
