//Question 1
function sayHello(name) {
  console.log('Hi ' + name);
}
// sayHello('Joseph');

const greet1 = (name) => {
  console.log(`Hi ${name}`)
}
greet1('Candace')

// const greet = ((name) => {
//   console.log(`Hi ${name}`)
// }) 
// greet('Candace')

// Question 2
const greet2a = (salute, name) => {
  console.log('2a', `${salute} ${name}`)
}
greet2a('Hey','Candace')

const greet2b = () => {
  let salute = 'Hello'
  let name = 'Candy'
  console.log('2b',`${salute} ${name}`)
}
greet2b()



