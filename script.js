import {arr} from "./index";
let num1 = 10;
let num2 = 5;

console.log(num1 + num2);

let obj = {
    name: 'Rockybul Hussain',
    age: 20,
    gender: 'Male', 
    nationality: 'Indian'
}

console.log(obj)


arr.forEach(arr => {
    console.log(arr)
})

const htmlTag = document.querySelector('.demo');
htmlTag.innerHTML = 'Hey my name is Rockybul Hussain';