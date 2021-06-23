"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");
let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";
  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

function solveMeFirst(a: number, b: number): number {
  // Hint: Type return a+b below
  if (a >= 1 && b <= 1000) {
    return a + b;
  }
}

function main() {
  var a: number = parseInt(readLine());
  var b: number = parseInt(readLine());

  var res: number = solveMeFirst(a, b);
  console.log(res);
}

// Function Description

// Complete the solveMeFirst function in the editor below.

// solveMeFirst has the following parameters:

// int a: the first value
// int b: the second value
// Returns
// - int: the sum of a and b

// Constraints a>=1 && b<=1000
