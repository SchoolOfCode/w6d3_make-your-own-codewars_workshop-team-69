/* 
👉 Write your kata here!

//make a function
//that takes in a number
//and returns an array of all of it's multiples 
    //the array is in ascending order

input - 10
output - [ 1, 2, 5, 10 ]

*/

//👉 Write the function your CodeWarriors will start with below here:
export default function multiples(number) {
    let multipleArr = [];
    for (let i = 1; i === number; i++) {
        if (number % i === 0) {
            multipleArr.push(i)
        }
    }
    multipleArr = multipleArr.sort((a,b) => a-b);
    return multipleArr;
}