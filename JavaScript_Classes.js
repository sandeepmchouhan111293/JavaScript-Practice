//Class creation is simple use class keyword and class nme and inside curly braces provide 
//blueprint for object

class Human{
  constructor(){
    this.gender="Male";
  }
  
  printGender(){
    console.log(this.gender);
  }
}

//By use of extends keyword we can extend functionality of class of perform inheritance
class Person extends Human{
  constructor(){
    //USe of super is required while extending another class or it will give error
    super();
    this.name="Sandeep";
  }
  
  printName(){
    console.log(this.name);
  }
}

//Declare object of class
const person = new Person();

//call method of class using object name
person.printName();
person.printGender();