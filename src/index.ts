function intro(name: string, age: number, country?: string): string {
    if (country) {
        return `My name is ${name} and age is ${age} I live in ${country}`;
    }
    return `My name is ${name} and age is ${age}`;
}

console.log(intro("John", 20));
console.log(intro("Trung", 20, "VietNam"));