"use strict";
const prompt = require("prompt-sync")({sigint:true});

let x = parseInt(prompt("Enter the number : "));
console.log(typeof x);