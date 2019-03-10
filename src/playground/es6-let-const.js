//can be redefined and reassigned
var nameVar = "Andrew";
nameVar = 'Gunther';
var nameVar = 'Mike';
console.log('nameVar',nameVar);

//can be reassigned
let nameLet = 'Pam';
nameLet = 'Sick';
console.log('namelet',nameLet);

//can NOT be redefned and reassigned
const nameConst = 'Freddy';
console.log('nameconst', nameConst);


//function scoped demonstration
function getPetName(){
    var petName = "ginger";
    return petName;
}

getPetName();
//can NOT accessed petName in the global scope
//no matter it's var let or const

//only var is accessible outside of {}
//block level scoping i.e. acessible inside {}
const fullName = "Nan Chen";
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);