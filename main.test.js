//👉 Write your tests below here:

/*// design a test for a function
//that takes in a number
//and returns an array of all of it's factors 
    //the array is in ascending order

input - 10
output - [ 1, 2, 5, 10 ]

// check all of the different types of inputs
// write all tests in a single describe block
    // check 10 --> [ 1, 2, 5, 10 ]
    // check 0  --> print out '0 is not divisible'
    // check -10 --> [ 1, 2, 5, 10 ]
    // check - 54 --> []
    // check 100 --> 
    // check 81
    // check 262
expect(). [ 1, 2, 5, 10 ]
*/
import factors from "./main.js";

describe('test factors func', () => {
    const arr = [
        [10, [1, 2, 5, 10]],
        [0, '0 is not divisible'],
        [-10, [1, 2, 5, 10]],
        [-54, [1, 2, 3, 6, 9, 18, 27, 54]],
        [100, [1, 2, 4, 5, 10, 20, 25, 50, 100]]
    ]
    // test('check 10 for it factors in an array in ascending order', () =>{

    //     const num = 10;
    //     const expected = [ 1, 2, 5, 10 ];
    //     const actual = factors(num);
    
    //     expect(actual).toEqual(expected);
    
    // })
    test.each(arr)('%i is a multiple of %o', (num, expected) => {
        const actual = factors(num)
        expect(actual).toEqual(expected)
    })

})