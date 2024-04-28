
 //question no1
 function maxProductOfTwo(nums) {
    if (nums.length < 2) {
        return "Array should contain at least two elements.";
    }

    let num1 = -Infinity;
    let num2 = -Infinity;
    let num3 = Infinity;
    let num4 = Infinity;

    // Iterate through the array
    for (let num of nums) {
        if (num > num1) {
            num2 = num1;
            num1 = num;
        } else if (num > num2) {
            max2 = num;
        }

        if (num < num1) {
            num2 = num1;
            num1 = num;
        } else if (num < num2) {
            num2 = num;
        }
    }
    return Math.max(num1 * num2, num1 * num2);
 }

let a = prompt("Enter your num first num");
let b = prompt("Enter your num first num");

const nums = [3, 6, -2, -5, 7, 3];
console.log(maxProductOfTwo(nums)); // Output should be 42 (3 * 7)


alert (a*b);

// Question no 2


function twoSum(nums, target) {
    const numIndices = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numIndices.hasOwnProperty(complement)) {
            // print on alert

            
            alert(`Indices: ${numIndices[complement]} and ${i}`);
            return [numIndices[complement], i];
        }
        numIndices[nums[i]] = i;
    }
}

// Example usage:
const num = [2, 7, 11, 15];
const target = 9;
twoSum(nums, target); 


//Question no 03


function reverse(string) {
    var reversed = '';
    while (reversed.length !== string.length) {
        reversed = string[reversed.length] + reversed;
    }
    return reversed;
}

console.log(reverse('')); // Outputs: ""

alert(reverse(prompt('Enter your Name')));



// Question # 04: Write a JavaScript program to display the reading status (i.e. display
//     book name, author name and reading status) of the following books.


let library = [{
    author:"Bil Gates",
    title:"The road Ahead",
    readingStatus:"True",

},

{
    author:"Steve Job",
    title:"Walter Iscascon",
    readingStatus:"True",

},
{
    author:"Suzan collins",
    title:"The Final book of hunger Games",
    readingStatus:"False",

},
]

console.log(library[0]);
console.log(library[1]);
console.log(library[2]);
 let readingStatus = library.forEach(element => {
   if(element.readingStatus === "True"){
    console.log("Book was read");
   }else{
    console.log("Book was not read");   }
 });
 


//Question no 5

// Write a JavaScript function to convert an amount into coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
// You can return the answer in any order.

function amountToCoins(amount, coins) {
   
    coins.sort((a, b) => b - a);
    
    let result = [];
    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            result.push(coins[i]);
            amount -= coins[i];
        }
    }
    return result;
}
console.log(amountToCoins(43, [25, 10, 5, 2, 1])); // Output: [25, 10, 10, 1]





