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

const airPlane: Airplane = {
    flightNumber: "SG102",
    airplaneModel: "A380",
    dateOfDeparture: "01/12/2022",
    timeOfDeparture: "23:10",
    from: "JFK",
    to: "DCA",
    seats: {
        "10A": "Max",
        "10B": "John"
    }
};