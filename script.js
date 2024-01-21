document.getElementById('btn').addEventListener('click', function () {
  const inputNumber = document.getElementById('ip').value;
  const outputDiv = document.getElementById('output');

  const printResult = (result) => {
    outputDiv.innerText = `Result: ${result}`;
  };

  // Create a promise that resolves after 2 seconds with the input number
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(Number(inputNumber));
    }, 2000);
  });

  // Chain promises to transform the data
  promise1
    .then((result) => {
      // Print the intermediate result
      printResult(result);

      // Return a new promise that multiplies the number by 2
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result * 2);
        }, 1000);
      });
    })
    .then((result) => {
      // Print the intermediate result
      printResult(result);

      // Return a new promise that subtracts 3 from the number
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result - 3);
        }, 1000);
      });
    })
    .then((result) => {
      // Print the intermediate result
      printResult(result);

      // Return a new promise that divides the number by 2
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result / 2);
        }, 1000);
      });
    })
    .then((result) => {
      // Print the intermediate result
      printResult(result);

      // Return a new promise that adds 10 to the number
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result + 10);
        }, 1000);
      });
    })
    .then((finalResult) => {
      // Update the text content of the output div with the final result
      outputDiv.innerText = `Final Result: ${finalResult}`;
    })
    .catch((error) => {
      console.error(error);
    });
});
