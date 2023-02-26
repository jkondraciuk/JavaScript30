// inventors, people

// 1. Filter the array of inventors for those who were born in the 1500's
const arr1 = inventors.filter(({ year }) => year >= 1500 && year < 1600);
console.log("%c 1:", "color: red; font-size: 22px;");
console.table(arr1);

// 2. Return an array of the inventory first and last names
const arr2 = inventors.map(({ first, last }) => ({ first, last }));
console.log("%c 2:", "color: red; font-size: 22px;");
console.table(arr2);

// 3. Sort the inventors by birthdate, oldest to younges
const arr3 = inventors.sort((a, b) => b.year - a.year);
console.log("%c 3:", "color: red; font-size: 22px;");
console.table(arr3);

// 4. How many years did all the inventors live?
const arr4 = inventors.reduce(
  (acc, curr) => (acc += curr.passed - curr.year),
  0
);
console.log("%c 4:", "color: red; font-size: 22px;");
console.log(arr4);

// 5. Sort the inventors by years lived
const arr5 = inventors.sort((a, b) => a.passed - a.year - (b.passed - b.year));
console.log("%c 5:", "color: red; font-size: 22px;");
console.table(arr5);

// 6. Sort the people alphabetically by last name ["last, first"]
const arr6 = people.sort((a, b) =>
  a.split(", ")[0] < b.split(", ")[0] ? -1 : 1
);
console.log("%c 6:", "color: red; font-size: 22px;");
console.log(arr6);
