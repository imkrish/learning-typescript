const person = {
  fullName: 'Keerati',
  blog: 'http',
  twitter: '@foo',
}

/* Rest */
const { fullName, ...socialMedia } = person

/* Spread */
const defaultStyles = {
  fontWeight: 'bold',
  fontFamily: 'Arial',
}

const userStyles = {
  color: '#1111',
  fontWeight: 700,
}

/* Order is important */
const styles = {
  ...defaultStyles,
  ...userStyles,
}

const { color, ...remainingProps } = styles

/* Shallow copy */
const todo = {
  text: 'Mow the lawn',
  completed: false,
  tags: ['garden'],
}

const shallowCopy = { ...todo }
shallowCopy.text = 'Buy milk'
shallowCopy.tags.push('market')

console.log(todo)
console.log(shallowCopy)

