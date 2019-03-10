// //const square = function (x) {
// //    return x * x;
// //};

// //OR 
// function square(x){
//     return x * x;
// };

// console.log(square(3));

// //all arrow functions are anonymous
// //const squareArrow = (x) => {
// //    return x * x;
// //};



// //arrow function expression syntax
// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));


//---------------------------------------------------



const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Jake Cornell'));

const getFirstNameArrow = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameArrow('Mike Smith'));