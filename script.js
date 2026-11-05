//Find the Maximum number in the Array.
let numbers = [4, 8, 2, 11, 6, 7, 10];

function findMaximum(arr) {
    let maximum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maximum) {
            maximum = arr[i];
        }
    }

    return maximum;
}

console.log("Maximum number:", findMaximum(numbers));




//Calculate the sum of all elements in array.
let num = [4, 8, 2, 11, 6, 7, 10];

const calculateSum = function(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
};

console.log("Sum of all elements:", calculateSum(num));


//Count of odd number.
let n = [4, 8, 2, 11, 6, 7, 10];

const countOdd = (arr) => {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }

    return count;
};

console.log("Count of odd numbers:", countOdd(n));