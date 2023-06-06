type Holidays = {
    date: Date;
    reason: string;
}[];

abstract class Department {
    protected abstract holidays: Holidays;
    protected constructor(protected name: string) { }
}

class ItDepartment extends Department { }

class AdminDepartment extends Department { }