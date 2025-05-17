document.getElementById("calcForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operation = document.querySelector('input[name="operation"]:checked').value;
  let result;

  if (operation === "add") result = num1 + num2;
  else if (operation === "subtract") result = num1 - num2;
  else if (operation === "multiply") result = num1 * num2;
  else if (operation === "divide") {
    if (num2 === 0) {
      alert("Error: Division by zero");
      return;
    }
    result = num1 / num2;
  }
  alert("Result: " + result);
});

document.getElementById("factorialForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let n = parseInt(document.getElementById("factorialInput").value);
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  alert("Factorial: " + factorial);
});

document.getElementById("fibonacciForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let n = parseInt(document.getElementById("fibonacciInput").value);
  let a = 0, b = 1, temp;

  if (n === 0) alert("Fibonacci(0) = 0");
  else if (n === 1) alert("Fibonacci(1) = 1");
  else {
    for (let i = 2; i <= n; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
    alert("Fibonacci(" + n + ") = " + b);
  }
});

document.getElementById("minMaxForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let nums = [
    parseFloat(document.getElementById("numA").value),
    parseFloat(document.getElementById("numB").value),
    parseFloat(document.getElementById("numC").value)
  ];
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  let range = max - min;
  alert(`Min: ${min}, Max: ${max}, Range: ${range}`);
});

document.getElementById("mailingListForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let zip = document.getElementById("zip").value;

  let output = `<p>${firstName} ${lastName} - ${email} - ${zip}</p>`;
  document.getElementById("signupList").innerHTML += output;
});
