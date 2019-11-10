import { Component } from '@angular/core';
import { Room } from './models/room';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    roomTitle: string = '';
    roomNumber: number = 0;
    roomPrice: number = 0;

    private _searchPrice: number;

    rooms: Room[] = [
        new Room("Dvokrevetna soba", 105, 12),
        new Room("Dvokrevetna soba", 106, 12),
        new Room("Dvokrevetna soba", 107, 12),
        new Room("Trokrevetna soba", 201, 18),
        new Room("Trokrevetna soba", 202, 18),
        new Room("Delux soba", 303, 40)
    ];

    filteredRooms: Room[];

    constructor() {
        this.filteredRooms = this.rooms;
    }

    get searchPrice(): number {
        return this._searchPrice;
    }
    
    set searchPrice(searchPrice: number) {
        this._searchPrice = searchPrice;
        this.searchBy(searchPrice);
    }

    searchBy(price: number) {
        if(price == null) {
            this.filteredRooms = this.rooms;
        }
        else {
            this.filteredRooms = this.rooms.filter(room => room.price <= price);
        }
    }

    search() {
        this.searchBy(this._searchPrice);
    }

    addRoom() {
        var room = new Room(this.roomTitle, this.roomNumber, this.roomPrice);
        this.rooms.push(room);
        this.filteredRooms.push(room);
        this.roomTitle = '';
        this.roomNumber = 0;
        this.roomPrice = 0;
    }

    shuffle() {
        this.filteredRooms.sort(() => Math.random() - 0.5);
    }

}
