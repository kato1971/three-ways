// Function declarations

function squareSumDec(number, number1) {
    const squareDec = ((number*number) + (number1*number1));
    const SumDec = (squareDec * squareDec);
    return SumDec
} 
console.log(squareSumDec(2, 2));


//Function expresions

const squareSumEx = function(number2, number3) {
    const squareEx = ((number2*number2) + (number3*number3));
    const SumEx = (squareEx * squareEx);
    return SumEx
}
console.log(squareSumEx(2, 2));


// Arrow functions

const squareSumArrow = (number4, number5)=> {
    const squareArrow = ((number4*number4) + (number4*number4));
    const SumArrow = (squareArrow * squareArrow);
    return SumArrow
}
console.log(squareSumArrow(2, 2));