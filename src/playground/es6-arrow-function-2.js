//arguments object - on longer bound with arrow functions

//ES5
// const add = function (a, b){
//     console.log(arguments);
//     return a + b;
// };
// //1001 is also accessible to add 

//ES6
const add = (a, b) => {
    //console.log(arguments); ERR
    return a + b;
};

//If we need to access arguments then use ES5 instead

console.log(add(55, 1, 1001));



//-------------------------------------------------------------



//this keyword - no longer bound 

// const user = {
//     name: 'Jake',
//     cities: ['nyc', 'nj', 'chicago'],
//     printPlacesLived: function () {
//         console.log(this.name);
//         console.log(this.cities);

//         //This approach provides ERR
//         // this.cities.forEach(function (city) {
//         //     console.log(this.name + " has lived in " + city);
//         // });
        
//         //Following approach works
//         const that = this;
//         that.cities.forEach(function (city) {
//             console.log(that.name + " has lived in " + city);
//         });
//     }
// };


//ES6
// const user = {
//     name: 'Jake',
//     cities: ['nyc', 'nj', 'chicago'],
//     printPlacesLived: function () {
//         this.cities.forEach((city)=>{
//             console.log(this.name + " has lived in " + city);
//         });
//     }
//  };

//ES6 provides consice code for anonymous function
//If we do want to use this keyword, use ES5
//OR use ES6 method definition syntax down below

//BAD way to use arrow function
// const badUser = {
//     name: 'Jake',
//     cities: ['nyc', 'nj', 'chicago'],
//     //ERR inside the method
//     printPlacesLived:  () => {
//         this.cities.forEach((city)=>{
//             console.log(this.name + " has lived in " + city);
//         });
//     }
// };


//ES6 method definition syntax
const user = {
    name: 'Jake',
    cities: ['nyc', 'nj', 'chicago'],
    printPlacesLived() {
        //map can transform each item
        //get a new array back
        return this.cities.map((city)=> this.name + ' has lived in ' + city);
       
        //forEach just let you do something
        //with each item
        // this.cities.forEach((city)=>{
        //     console.log(this.name + " has lived in " + city);
        // });
    }
 };

 console.log(user.printPlacesLived());



//---------------------------------------------------------------------



 const multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
 };

 console.log(multiplier.multiply());