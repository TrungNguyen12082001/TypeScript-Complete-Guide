// firstname, lastname, age

let person: [string, string, number?];

person = ["John", "Doe"];

// [
// NumberOfStudents: number,
// passing: boolean,
// 'John', 'Stella'
//]

type listOfStudents = [number, boolean, ...string[]]; // Tuples

const passingStudents: listOfStudents = [3, true, "John", "Stella", "Mark"];
const failingStudents: listOfStudents = [1, false, "Scott"];