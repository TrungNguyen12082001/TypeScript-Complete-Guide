enum Roles {
    admin = "admin",
    author = "author",
    editor = "editor"
}

interface Role {
    role: Roles;
}

enum PermissionsList {
    read = "read",
    write = "write",
    execute = "execute"
}

interface UserPermissions {
    permissions: PermissionsList[];
}

interface AdminUser extends User, Role, UserPermissions {
    numberOfUsersReporting: number;
}

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

const rob: AdminUser = {
    name: "Rob",
    email: "rob@email.com",
    phone: 9934234,
    gender: "male",
    role: Roles.admin,
    permissions: [
        PermissionsList.execute,
        PermissionsList.read,
        PermissionsList.write
    ],
    numberOfUsersReporting: 5
};

console.log(rob);