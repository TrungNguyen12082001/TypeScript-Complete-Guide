interface Person {
    name: string;
    email: string;
    age: number;
    phone?: number;
    greet?: () => void;
}

const person: Person = {
    name: "Trung",
    email: "trung@gmail.com",
    age: 20,
};