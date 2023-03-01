// people { name, year }, comments { text, id }s

// 1. is at least one person 19?
const arr1 = people.some((el) => new Date().getFullYear() - el.year >= 19);
console.log({ arr1 });

// 2. is everyone 19?
const arr2 = people.every((el) => new Date().getFullYear() - el.year >= 19);
console.log({ arr2 });

// 3. find comment with ID of 823423
const arr3 = comments.find(el => el.id === 823423);
console.log(arr3);

// 4. delete comment with ID of 823423
const index = comments.findIndex(el => el.id === 823423);
comments.splice(index, 1);
console.log(comments);