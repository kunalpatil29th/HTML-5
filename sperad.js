// let arr = [1 ,2 ,3 ,5 ,6 ];
// Math.min(...arr);
// console.log(...arr);
// console.log((Math.min(...arr)));

// console.log(..."KUNAL");


// // 
// const original = [1, 2, 3];
// const copy = [...original];

// copy.push(4);
// console.log(original); // Output: [1, 2, 3] (Original remains unchanged)
// console.log(copy);

// spread with object literals
let data = {
    email: "kunal@gmail.com",
    password: "34553",
    ID : 45353,
    ticketNumber : 344552,
}
let dataCopyInfo = {...data};
console.log(dataCopyInfo = {...data});


const original = { name: "Alice", age: 28 };
const clone = { ...original };

console.log(clone); // { name: "Alice", age: 28 }
console.log(original === clone); // false (they point to different memory addresses)

