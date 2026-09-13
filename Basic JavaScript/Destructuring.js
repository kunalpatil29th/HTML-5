let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50


// Destructiong with objects
const student = {
    name : "kunal",
    class : "3year",
    age : 20,
    subject : ["Hindi", "Math","Eng","Sci"],
    username : "Kunal@123",
    password: 1234,
};

const {username:user,password:pass}=student;
console.log(user);