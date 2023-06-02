type Reservation = {
    departureDate: Date;
    returnDate?: Date;
    departingFrom: string;
    destination: string;
};

type Reserve = {
    (departureDate: Date, returnDate: Date, departingFrom: string, destination: string): Reservation | never;
    (departureDate: Date, departingFrom: string, destination: string): Reservation | never;
};

const reserve: Reserve = (
    departureDate: Date,
    returnDateOrDeparturingFrom: Date | string,
    departuringFromOrDestination: string,
    destination?: string
) => {
    if (returnDateOrDeparturingFrom instanceof Date && destination) {
        return {
            departureDate: departureDate,
            returnDate: returnDateOrDeparturingFrom,
            departingFrom: departuringFromOrDestination,
            destination: destination
        };
    } else if (typeof returnDateOrDeparturingFrom === "string") {
        return {
            departureDate: departureDate,
            departingFrom: returnDateOrDeparturingFrom,
            destination: departuringFromOrDestination
        };
    }
    throw new Error("Please provide valid details to reserve a ticket");
};

console.log(reserve(new Date(), new Date(), "NYC", "Washington"));
console.log(reserve(new Date(), "NYC", "Washington"));