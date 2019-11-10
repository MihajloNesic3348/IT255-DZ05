export class Room {
    private _title: string;
    private _roomNumber: number;
    private _price: number;

    constructor(title: string, roomNumber: number, price: number) {
        this._title = title;
        this._roomNumber = roomNumber;
        this._price = price;
    }

    get title(): string {
        return this._title;
    }

    get roomNumber(): number {
        return this._roomNumber;
    }

    get price(): number {
        return this._price;
    }
}
