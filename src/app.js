
import { filter } from "lodash";

const print = text => console.log(text);

print('Hello World');


let arr = [1, 2, 3, 4]

console.log(filter(arr, item => item > 2));

let s = new Set();

s.add(1);

s.add(2);

console.log(Array.from(s));
