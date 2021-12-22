//👉 Write your tests below here:

/*// design a test for a function
//that takes in a number
//and returns an array of all of it's multiples 
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



describe('test multiples func', () => {

    test('check 10 for it multiples in an array in ascending order', () =>{

        const num = 10;
        const expected = [ 1, 2, 5, 10 ];
    
        const actual = multiples(num);
    
        expected(actual).toStrictEqual(expected);
    
    })

})