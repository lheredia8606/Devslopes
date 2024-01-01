class Person {
  constructor (name, hobby){
    this.name = name;
    this.hobby = hobby;
  }
  greeting (){
    console.log(`Hi, my name is ${this.name} and my hobbies are ${this.hobby.join(', ')}`);
  }
  addHobby (hobby){
    this.hobby.push(hobby)
  }

}
class Admin extends Person{
  constructor (name, hobby){
    super(name,hobby);
  }
  
}


const leo = new Admin ('leo',['codding']);
leo.addHobby('Gaming');
leo.greeting();