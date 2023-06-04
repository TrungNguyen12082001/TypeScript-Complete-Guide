class Person {
    private _age: number | undefined;
    constructor(protected name: string) { }

    public getName() {
        return this.name;
    }

    public set age(age: number) {
        if (age > 200 || age < 0) {
            throw new Error("The age must be within range 0-200");
        }
        this._age = age;
    }

    public get age() {
        if (this._age === undefined) {
            throw new Error("The age has not been set as yet");
        }
        return this._age;
    }
}

const person: Person = new Person("John");
person.age = 70;

console.log(person.age);
console.log(person.getName());