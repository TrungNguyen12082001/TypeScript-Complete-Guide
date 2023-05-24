let number: readonly number[] = [1, 2, 3];

// number.push(1) throw error

type readonlyPerson = readonly [string, string, number];

const person: readonlyPerson = ["John", "Smith", 32];

type a = Readonly<string[]>;
type c = Readonly<[string, string, number]>;