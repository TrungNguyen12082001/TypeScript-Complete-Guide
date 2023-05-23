
let a1: number[] = [1, 2, 3];

let b1: Array<string> = ["a", "b", "c"]; // 2 ways of declare array type

let c1: (string | number)[] = ["a", "b", 1, 2]; // Array<string | number>

type Airplane = {
    flightNumber: string;
    airplaneModel: string;
    dateOfDeparture: string;
    timeOfDeparture: string;
    from: string;
    to: string;
    seats: {
        //orderProperty: number; // index signatures can coexist with other value but it must to same type
        [key: string]: string;
    };
};

type Airplanes = Airplane[];

const airplanes: Airplanes = [
    {
        flightNumber: "SG102",
        airplaneModel: "string",
        dateOfDeparture: "string",
        timeOfDeparture: "string",
        from: "string",
        to: "string",
        seats: {
            //orderProperty: number; // index signatures can coexist with other value but it must to same type
            "10A": "Trung"
        },
    },
    {
        flightNumber: "SG103",
        airplaneModel: "string",
        dateOfDeparture: "string",
        timeOfDeparture: "string",
        from: "string",
        to: "string",
        seats: {
            //orderProperty: number; // index signatures can coexist with other value but it must to same type
            "10A": "Trung"
        },
    }
];