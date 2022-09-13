// sorting////////////////////
// const people = ["Harry", "Ron", "Hermione", "Naville"];
// people.sort();
// console.log(people);

// ////////////////sorting animal array
const animals = [
  { name: "Mandu", type: "cat" },
  { name: "Mia", type: "cat" },
  { name: "Leeloo", type: "dog" },
  { name: "Freddie", type: "dog" },
  { name: "Freddie", type: "dog" },
  { name: "Rex", type: "dog" },
  { name: "Pedro", type: "cat" },
  { name: "Miss", type: "cat" },
];
// sorting for only dogs
function filterList(filteredList, filterBy) {
  return filteredList.filter((animal) => animal.type === filterBy);
}
const filteredList = filterList(animals, "dog");
console.log("filteredList: ", filteredList);

// const prop = "type";
// const sortedList = sortList(animals, "name", "desc");
// console.log(sortedList);

// // adding closure( basically closure is that have function inside a function)
// function sortList(listToSort, dir = "asc") {
//   let sortDir;
//   if (dir === "asc") {
//     sortDir = 1;
//   } else {
//     sortDir = -1;
//   }
//   listToSort = listToSort.sort(compareName);
//   function compareName(a, b) {
//     // to get any property of the onject
//     if (a[prop] < b[prop]) {
//       return -1 * sortDir;
//     } else {
//       return 1 * sortDir;
//     }

//     // to reverse the value change the value from -1 to 1 and 1 to -1 either can use this > sign instead of < sign
//   }
//   return listToSort;
// }

// const filteredList = filterList(animals, "dog");
// const filteredAndSortedList = sortList(filterList, "desc");

//let myObj = {name:"Tommy", type:"dog" };

// // console.log(myObj.name);
// // console.log(myObj[prop]);
// // console.log(animals);
// // animals.sort(compareName);
// // console.log(animals);
