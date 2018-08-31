function Person() {
  this.age;
  this.sex;
}

Person.prototype.addAge = function(age) {
  this.age = age;
};

const person1 = new Person();

person1.addAge(20);

console.log(person1.age);
