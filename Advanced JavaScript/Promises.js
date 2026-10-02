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