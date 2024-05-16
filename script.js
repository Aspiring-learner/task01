// 1.Create a function that takes an integer parameter representing the number of inputs. The function should prompt the user to enter input the specified number of times :
//  The total number of inputs
//  The number of even numbers
//  The number of odd numbers
//  The number of positive numbers
//  The number of negative numbers
//  The number of zeros
//  The sum of all inputs
//  The no. of inputs that are string 

// 2. Implement Subtraction , Multiplication and Division functions and Add buttons in html to get result using alert();

function stats(total_in) {
    let total_inputs = total_in;
    let evenCount = 0;
    let oddCount = 0;
    let positiveCount = 0;
    let negativeCount = 0;
    let zerosCount = 0;
    let sum = 0;
    let noOfStrings = 0;

    for (let i = 1; i <= total_inputs; i++) {
        let input = parseInt(prompt(`Enter ${i} input value`));
        if (!isNaN(input)) {
            sum = sum + input;

            if (input % 2 == 0) {
                evenCount++;
            }
            else {
                oddCount++;
            }

            if (input > 0) {
                positiveCount++;
            }
            else {
                negativeCount++;
            }

            if (input == 0) {
                zerosCount++;
            }
        }
        else {
            noOfStrings++;
        }
    }

    alert(`Total Inputs: ${total_inputs}\nEven Numbers: ${evenCount}\nOdd Numbers: ${oddCount}\nPositive Numbers: ${positiveCount}\nNegative Numbers: ${negativeCount}\nZeros: ${zerosCount}\nSum of all Inputs: ${sum}\nNumber of inputs that are strings: ${noOfStrings}`);
}


var inputs = prompt("Enter total number of inputs");

stats(inputs);


function Subtraction() {
    let input_one = parseInt(prompt("Enter first value"));
    let input_second = parseInt(prompt("Enter second value"));

    let result = input_one - input_second;
    alert(`Subtraction of two number is: ${result}`);
}

function Multiplication() {
    let input_one = parseInt(prompt("Enter first value"));
    let input_second = parseInt(prompt("Enter second value"));

    let result = input_one * input_second;
    alert(`Multiplication of two number is: ${result}`);
}

function Division() {
    let input_one = parseInt(prompt("Enter first value"));
    let input_second = parseInt(prompt("Enter second value"));

    if (input_second == 0) {
        alert("Number cannot be divided by zero");
    }
    else {
        let result = input_one / input_second;
        alert(`Division of two number is: ${result}`);
    }

}