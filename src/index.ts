class Person {
    private age: number;
    constructor(protected name: string) { }

    public getName() {
        return this.name;
    }
}

const person: Person = new Person("John");
const mark: Person = new Person("Mark");

console.log(person);
console.log(mark);