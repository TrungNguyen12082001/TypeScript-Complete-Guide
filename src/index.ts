let loggedInUsername: string;

const users = [
    { name: "Obby", age: 12 },
    { name: "Hina", age: 32 },
];

const loggedInUser = users.find((user) => user.name === loggedInUsername);

// console.log(loggedInUser.age);

let saveButton: HTMLElement | null = document.getElementById("save");

if (saveButton !== null) {
    // do something
}