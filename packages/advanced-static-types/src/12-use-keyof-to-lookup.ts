interface Employee {
  id: number
  firstName: string
  boss: boolean
}

const employee: Employee = {
  id: 1,
  firstName: 'Keerati',
  boss: true,
}

/* Does not know what the return type */
// function prop<T>(obj: T, key: keyof T) {
//   return obj[key]
// }

function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const id = prop(employee, 'id')
const boss = prop(employee, 'boss')
const firstName = prop(employee, 'firstName')

type EmployeeId = Employee['id']
type EmployeeFirstNameOrBoss = Employee['firstName' | 'boss']
