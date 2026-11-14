const person = {
  firstName: "Майкл",
  lastName: "Джордан",
  age: 20
};

person.email = "jordan@gmail.com";
delete person.age;

console.log(person);