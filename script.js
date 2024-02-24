document.addEventListener('DOMContentLoaded', () => {
    // Get references to HTML elements
    const input = document.getElementById('ip');
    const button = document.getElementById('btn');
    const output = document.getElementById('output');

    // Add event listener to the button
    button.addEventListener('click', () => {
        // Create a promise that resolves after 2 seconds with the number in the input
        const promise1 = new Promise((resolve) => {
            setTimeout(() => {
                resolve(parseInt(input.value));
            }, 2000);
        });

        // Print initial result
        promise1.then((result) => {
            output.textContent = `Result: ${result}`;
            return result;
        })

        // Chain promises
        .then((result) => {
            // Multiply the number by 2 and resolve after 1 second
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(result * 2);
                }, 1000);
            });
        })

        .then((result) => {
            // Subtract 3 from the number and resolve after 1 second
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(result - 3);
                }, 1000);
            });
        })

        .then((result) => {
            // Divide the number by 2 and resolve after 1 second
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(result / 2);
                }, 1000);
            });
        })

        .then((result) => {
            // Add 10 to the number and resolve after 1 second
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(result + 10);
                }, 1000);
            });
        })

        // Update the text content of the output div with the final result
        .then((result) => {
            output.textContent = `Final Result: ${result}`;
        })

        // Handle errors and rejections
        .catch((error) => {
            console.error('Error:', error);
            output.textContent = 'Error occurred, please try again.';
        });
    });
});
