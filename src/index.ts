type TypeOfLibrary = "national" | "acadamic" | "public";

type Book = {
    title: string;
    pages: number;
    isbn: string;
};

type Member = {
    name: string;
    phone: string;
    [key: string]: string;
};

type Library = {
    name: string;
    address: string;
    numberOfBooks: number;
    type: TypeOfLibrary;
    books: Book[];
    genres: string[];
    members: Member[];
};

const library: Library = {
    name: "NYC",
    address: "23 some street, NY",
    numberOfBooks: 1245,
    type: "national",
    books: [
        {
            title: "Harry",
            pages: 756,
            isbn: "9910-2-0123-0"
        },
        {
            title: "Davinci",
            pages: 386,
            isbn: "9971-923-3-12"
        }
    ],
    genres: ["fiction", "history", "computers", "poetry"],
    members: [
        {
            name: "John Doe",
            phone: "+1645352"
        },
        {
            name: "Mark Doe",
            phone: "+12332424234",
            email: "mark@email.com"
        }
    ]
};