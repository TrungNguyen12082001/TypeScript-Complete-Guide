class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let person: Person = new Person("Trung", 22);
person.name = "Mike";

console.log(person);