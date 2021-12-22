/* 
👉 Write your kata here!

Write a function that takes a number as an argument and returns a sorted (ascending) array of the number's factors (a factor is a number that divides another number or expression evenly with no remainders).

If the argument is 0, return the following string: '0 is not divisible'.
If a negative number is passed as an argument, convert it to a positive number.
TIP: Do not hesitate to google Array.sort if you need help with sorting numbers in ascending order.


For example:
factors(10) returns [1, 2, 5, 10]

*/

//👉 Write the function your CodeWarriors will start with below here:
export default function factors(number) {
    if (number === 0) {
        return '0 is not divisible';
    }
    let multipleArr = [];
    number = Math.abs(number)
    for (let i = 1; i <= number; i++) {
        console.log(number, i);
        if (number % i === 0) {
            multipleArr.push(i)
        }
    }
    multipleArr.sort((a,b) => a-b);

    return multipleArr;
}