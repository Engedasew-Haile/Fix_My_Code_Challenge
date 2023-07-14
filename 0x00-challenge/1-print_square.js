#!/usr/bin/node

let n = 5; // you can take input from prompt
let string = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    string += "#";
  }
  string += '\n';
}
console.log(string);
