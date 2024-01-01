// Solution Example
class Email {
  constructor(email){
    if(this.validateEmail(email)) {
      this.email = email;
    }
    else {
      throw new Error("Invalid email!");
    }        
  }
  validateEmail(email) {
    const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }
}

class Person {
  constructor(name, email){
      this.email = email;
      this.name = name;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const me = new Person("James", new Email("code@life.com"));
console.log(me);