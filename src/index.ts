enum AutomobileType {
    car = "car",
    bus = "bus",
    van = "van",
    truck = "truck",
    bike = "bike"
}

enum AutomobileBrands {
    ferrari = "ferrari",
    honda = "honda",
    bmw = "bmw",
    toyota = "toyota"
}

enum AutomobileColors {
    red = "red",
    blue = "blue",
    white = "white",
    black = "black",
    silver = "silver"
}

interface Automobile<Type, Brand, Colors> {
    type: Type;
    brand: Brand;
    colors: Colors[];
    description: string;
}

// type --car
// brand - is Ferrari
// colors - ['black', 'red']
// description - string