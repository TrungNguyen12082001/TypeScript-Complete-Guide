type Reservation = {
    departureDate: Date;
    returnDate: Date;
    departingFrom: string;
    destination: string;
};

type Reverse = {
    (departureDate: Date, returnDate: Date, departingFrom: string, destination: string): Reservation;
};