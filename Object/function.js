function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
const mySelf = new Person("Devyani", "Shelke", 20, "brown");
console.log(mySelf.firstName);