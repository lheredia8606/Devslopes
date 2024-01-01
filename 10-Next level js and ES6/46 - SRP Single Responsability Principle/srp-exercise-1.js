/* 
- This code does not resinate with the Single Responsibility Principle.
- The Person Class includes:
 * Person details, which it uses in the "greet()" method
 * AND validates the email 🤔
- Refactor the code to follow the Single Responsibility Principle. Something in this Person class seems too tightly coupled to it.
- A user should be able to:
* create a new instance of Person with a name and email
* validate the email and assign it to the Person instance if valid.
*/

class Email {
  constructor (email){
    if(this.validateEmail(email)){
      this.email = email;
    }
    else throw new Error('Invalid email');
  }

  validateEmail(email) {
    const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }
}

class Person {
  constructor(name, email){
      this.name = name;
      this.email = email;
  }
 
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const me = new Person("James", "code@life.com");
console.log(me);