class Person {
    name = "John";
    email = "john@email.com";

    constructor(name: string, email: string) {
        console.log("name: " + name);
        console.log("email: " + email);
    }

    greet() {
        return `Hello John`;
    }
}

const person = new Person("John", "john@email.com");
const person2 = new Person("Mark", "mark@email.com");
