////////////////////////////////////////animal filtering///////////////////////////////
const animals = [
  { name: "Mandu", type: "cat" },
  { name: "Jonas", type: "dog" },
  {
    name: "Freddie",
    type: "cat",
  },
];
let viewArray;

function isCat(animal) {
  if (animal.name !== "Mandu" && animal.type !== "cat") {
    return false;
  }
  return true;
}
console.log("animals:", animals);
// getCat = animals.filter(isCat);
// console.log("getCat:", getCat);

function all(animal) {
  return true;
}
function none(animal) {
  return false;
}
viewArray = animals.filter(all);
viewArray = animals.filter(none);
console.log("viewArray:", viewArray);
const onlyCats = animals.filter(isCat);
console.log(onlyCats);
