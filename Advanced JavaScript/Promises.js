const fetchUserData = new Promise((resolve, reject) => {
  let success = true; // Simulating an operation outcome

  setTimeout(() => {
    if (success) {
      resolve({ id: 1, name: "Alice" }); // Marks the promise as fulfilled
    } else {
      reject("Failed to fetch user data."); // Marks the promise as rejected
    }
  }, 1000);
});


// Promises in javascript

const promise = new Promise((resolve, reject) => {
    // Asynchronous operation

    let success = true;

    if (success) {
        resolve("Task Completed!");
    } else {
        reject("Task Failed!");
    }
}); 


// Promises two method

let request = saveDB = ("Kunal Patil");
request.then(()=>{
    console.log("Promises resloved");
})
.catch(()=>{
    console.log(" Promises Rejected")
});