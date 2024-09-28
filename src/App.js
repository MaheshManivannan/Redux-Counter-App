/* import './App.css';
import { compose,pipe } from 'lodash/fp'; */

import Counter from "./features/counter/Counter";
import './index.css';

/* function pressLike(){
  return "Hello World!";
}
function thisFun(fn){
  console.log(fn());
}
thisFun(pressLike);
 */

/* function pressLike(){
  return function(){
    console.log("Thank you");
  }
}
let fn = pressLike();
let message = fn(); */

//curring
/* function sum(a){
  return function(b){
    return function(c){
      return a+b+c;
    }
  }
}
console.log(sum(2)(3)(5)); */

//curring using arrow function 
/* const sum = (a) => (b) => (c) => a+b+c;
console.log(sum(4)(5)(6)); */


/* let input = "    SUBScribe    ";
let trim = (str) => str.trim();
let lower = (str) => str.toLowerCase();
let wrap = (str) => `<div>${str}</div>`;
let output = pipe(trim,lower,wrap);
console.log(output(input)); */

//same above code using currying
/* let input = "    SUBScribe    ";
let trim = (str) => str.trim();
let lower = (str) => str.toLowerCase();
let wrap = tag => str => `<${tag}>${str}</${tag}>`;
let output = pipe(trim,lower,wrap("span"));
console.log(output(input));
 */

//shallow copy and deep copy
/* const cricket = {
  name: "Rohit",
  age: 37,
  address : {
    city: "Mumbai",
    country: "India"
  }
}
cricket.name = "Suryakumar";
const cricketNorth = {
  ...cricket,
  address : {
    ...cricket.address
  },
  name: "Virat"
}
cricketNorth.address.city = 'Delhi';
console.log(cricket);
console.log(cricketNorth); */

function App() {
  return (
    <>
    <Counter />
    </>
  )
}
export default App;
