interface User {
    name: string;
    email: string;
    phone: number;
    gender: string;
}

interface UserWithAddress extends User {
    address: string;
}

const user: User = {
    name: "Trung",
    email: "trung@gmail.com",
    phone: 09423241,
    gender: "male"
};

const userWithAddress: UserWithAddress = {
    name: "Trung1",
    email: "trung1@gmail.com",
    phone: 213123123,
    gender: "male",
    address: "This is an address"
};

console.log(user);
console.log(userWithAddress);