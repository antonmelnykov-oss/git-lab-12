const users = [
  { name: "Джордан", email: "jordan@gmail.com", age: 53 },
  { name: "Мессі", email: "messi@gmail.com", age: 39 },
  { name: "Роналду", email: "ronaldo@gmail.com", age: 42 }
];

for (const { name, email, age } of users) {
  console.log(name, " | ", email, " | ", age);
}