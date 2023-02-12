//new array created
const number= [1,2,3];

//new array created by merging old array using spread operator
const newNumbers = [...number,4];

//result in this case will be [1, 2, 3, 4]
console.log(newNumbers);

//new array created by merging old array without using spread operator
const differentResult = [number,4];

//result in this case will be [[1, 2, 3], 4]
console.log(differentResult);

//person object created
const person = {
  name:"Sandeep"
}

//new object created using spread operator
const newperson ={
  ...person,
  age:29
}

//result in this case will be 
/*[object Object] {
  age: 29,
  name: "Sandeep"
}
*/

console.log(newperson);