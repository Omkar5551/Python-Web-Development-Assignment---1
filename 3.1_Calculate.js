let m1 = parseInt(prompt("Enter marks 1:"));
let m2 = parseInt(prompt("Enter marks 2:"));
let m3 = parseInt(prompt("Enter marks 3:"));

let sum = m1 + m2 + m3;
let avg = sum / 3;

let grade;
if (avg >= 80) {
    grade = "A";
} else if (avg >= 60) {
    grade = "B";
} else if (avg >= 40) {
    grade = "C";
} else {
    grade = "Fail";
}

console.log("Sum =", sum);
console.log("Average =", avg);
console.log("Grade =", grade);