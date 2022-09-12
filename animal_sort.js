// sorting////////////////////
// const people = ["Harry", "Ron", "Hermione", "Naville"];
// people.sort();
// console.log(people);

// ////////////////sorting animal array
const animals = [
  { name: "Mandu", type: "cat" },
  { name: "Mia", type: "cat" },
  { name: "Leeloo", type: "dog" },
  { name: "Scoobydoo", type: "dog" },
];
function compareName(a, b) {
  if (a.name < b.name) {
    return -1;
  } else {
    return 1;
  }
}
console.log(animals);
animals.sort(compareName);
console.log(animals);
