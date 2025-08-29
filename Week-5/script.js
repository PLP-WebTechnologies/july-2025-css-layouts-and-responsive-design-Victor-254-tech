// 🎯 Part 1: Mastering JavaScript Basics
// Variables, conditionals, and user input
function checkAge() {
  let age = document.getElementById("ageInput").value; // get input
  let result = "";

  if (age >= 18) {
    result = "You are an adult ✅";
  } else if (age > 0) {
    result = "You are still young 👶";
  } else {
    result = "Please enter a valid age!";
  }

  // Display result
  document.getElementById("ageResult").innerText = result;
}

// ❤️ Part 2: Functions — Reusable code
// Function 1: Greeting
function showGreeting(name) {
  let message = `Hello, ${name}! Welcome to JavaScript 🚀`;
  document.getElementById("greeting").innerText = message;
}

// Function 2: Calculate total (simple example)
function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log("Total price:", calculateTotal(200, 3)); // logs 600

// 🔁 Part 3: Loops
// Example 1: Countdown using a for loop
function countDown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear previous results

  for (let i = 5; i > 0; i--) {
    let li = document.createElement("li");
    li.innerText = i;
    list.appendChild(li);
  }
}

// Example 2: Looping through an array
let fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grapes"];
fruits.forEach(fruit => {
  console.log("Fruit:", fruit);
});

// 🌐 Part 4: DOM Manipulation
// Example 1: Change background color on button click
document.getElementById("colorBtn").addEventListener("click", function() {
  document.body.classList.toggle("highlight");
});

// Example 2: Add items dynamically to a list
document.getElementById("addItemBtn").addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.innerText = "New item added ✅";
  document.getElementById("dynamicList").appendChild(newItem);
});

// Example 3: Update text dynamically (already used in showGreeting & checkAge)
