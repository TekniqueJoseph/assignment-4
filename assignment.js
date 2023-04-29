//Question 1
function sayHello(name) {
  console.log('Hi ' + name);
}
// sayHello('Joseph');

const greet1 = (name) => {
  console.log('1)',`Hi ${name}`)
}
greet1('Candace')

// const greet = ((name) => {
//   console.log(`Hi ${name}`)
// }) 
// greet('Candace')

// Question 2
const greet2a = (salute, name) => {
  console.log('2a)', `${salute} ${name}`)
}
greet2a('Hey','Candace')

const greet2b = () => {
  let salute = 'Hello'
  let name = 'Candy'
  console.log('2b)',`${salute} ${name}`)
}
greet2b()

const greet2c = () => {
  return 'Good Evening Candy'
}

console.log('2c)',greet2c())

// Question 3

const greet3 = (salute, name = 'Candy') => {
  console.log('3)', `${salute} ${name}`)
}
greet3('Hi' )

// Question 4
const checkInput = (cb,...words) => {
  // console.log(words)
  const validWords = (words) => {
    return words === '' ? 'EMPTY STRING ALERT': words;
}; 
  let PHRASE = 'The results are'
  let alph = PHRASE;
    for(const letters of words){
      alph += validWords(letters)
    }
    console.log(alph)
    cb(alph)
}
const correct = (result) => {
  alert(`${result} `)
}

checkInput(correct," Rose ", 'Cool ', '', ' Clear' )


// const sumUp2 = (cb,...numbers) => {
//   console.log(cb, numbers)
//   const validateNumber = (number) => {
//       return isNaN(number) ? 1 : number;
//   }; 
//   let sum = 0;
//   // console.log('the rest', numbers)
//   for (const num of numbers) {
//       sum += validateNumber(num)
//   }
//   cb(sum);
// }

// const showResult = (result) => {
//   alert(`the reslt after adding the numbers is ${result}`)
// };
