// JavaScript Notes

// 1) Import and Export

// default Export

const person = {
    name: 'erol'
}
export default person;

import person from './person.js';

// named Export

export conts clean = () => {};

import {clean} from './utility.js';

import * as bundled from './utility.js';


// 2) Classes

class Person{
    // properities
    name = 'max';
    // methods
    call = () =>{...}
}

class Human {
    constructor(){
        this.gender = 'Male '
    }
}

//Inherit from Human

class Person extends Human {
    
    constructor(){
        super() // excetues the parrent constructor.
        this.name = 'erol';
        this.gender = 'male'
    }

    printMyName(){
        console.log(this.name)
    }
}

const person = new Person();
person.printMyName();


//Classes, Properities and Methods

//ES6

class Something {
    constructor(){
        this.myPropery = 'value';
    }
    myMethod (){
        ...
    }
}

//ES7

myPropery = 'value';
myMethod = () => {...};

// ES7

class Human {
    constructor(){
        this.gender = 'Male '
    }
}

//Inherit from Human

class Person extends Human {
    name = 'erol';
    gender = 'male';

    printMyName = ()=>{
        console.log(this.name) //This should print "erol"
    }
}

const person = new Person();
person.printMyName();


//The Spread and Rest Operatior

//Spread Oprator
const newArray = [...oldArray, 1,2];
const newObject = {...oldObject, newProps: 5};

const number = [1,2,3];
//add all element individualy 
const newNumbers = [...numbers, 4];
//add number as one piece
const newNumbers = [number, 4,5];



//Rest Operator
function sortArgs(...args){
    return args.sort()
}

//object

const person = {
    name: Erol
}

const newPerson = {
    ...person,
    age:28
}

//filtering object
const filter = (...args)=>{
    return args.filter(el => e===1);
}

console.log(filter(1,2,3)) //This should pring [1]


//Destructring

//Extract array of elements or object properities and store them in variables
//Allow single element or properities and store them in variables. 

//Array destructuring
[a,b] = ["hello", "erol"]

//Example
const numbers = [1,2,3];
[num1, , num3] = numbers;
console.log(num1, num3)//this should print 1 3

[num1,num2] = numbers;

//Object Destructuring
{name} = {name: "Erol", age: 28}
console.log(name) //this should print "Erol"
console.log(age) // this should return undefined


//Reference and primitive types
//Primitive type
const number = 1;
const num2 = number;

//Reference type; object and arrays
const person = {
    person: "erol"
}

const secondPerson = person;
person.name = "Manu";
console.log(secondPerson); //This should print manu

//This will take the properities of object
const secondPerson = {
    ...person
}
person.name = "Manu";
console.log(secondPerson); //This should print max

//Array function
const numbers = [1,2,3];
//Map function
const doubleNumArray = numbers.map((num)=>{
    return num*2;
});
console.log(doubleNumArray); //This should print [2,4,6]

