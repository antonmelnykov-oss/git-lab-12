const car1 = {
  brand: "Audi",
  model: "R8",
  year: 2008
};

const car2 = {
  brand: "BMW",
  model: "X5",
  owner: 2022
};

const car3 = { ...car1, ...car2 };

console.log(car3);