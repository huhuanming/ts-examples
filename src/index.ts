//es5
function greeter(person: string) {
  return "Hello, " + person;
}
console.log(greeter('Han Meimei'))


// es6
const greeterFullName = (person: IPerson) => {
  // person.successCallBack('successd')
  if (person.successCallBack) {
    person.successCallBack('successd')
  }
  return `Hello, ${person.firstName} ${person.lastName}`
}
// console.log(greeterFullName({ firstName: 'hua', lastName: 'li' }))
console.log(greeterFullName(
  {
    firstName: 'hua',
    lastName: 'li',
    age: 16,
    isStudent: true,
    home: {
      address: 'China'
    },
    gender: 'male',
    successCallBack: (message) => { console.log(message)}
  }))


class Student {
  fullName: string
  constructor(firstName: string, lastName: string) {
    this.fullName = `${firstName} ${lastName}`
  }

  greetTo(person: IPerson) {
    return `Hello, ${person.firstName} ${person.lastName}, my name is ${this.fullName}`
  }
}


const student = new Student('Ming', 'Li');
console.log(student.greetTo({
  firstName: 'hua',
  lastName: 'li',
  age: 16,
  isStudent: true,
  home: {
    address: 'China'
  },
  gender: 'male',
}))


class Greeter<T> {
  greeting: T
  constructor(message: T) {
    this.greeting = message
  }
  greet() {
    return this.greeting
  }
}


const newGreeter = new Greeter<string>("Hello, world");
console.log(newGreeter.greet())


const newGreeter2 = new Greeter<number>(1);
console.log(newGreeter2.greet())

class Teacher extends Student {

}
