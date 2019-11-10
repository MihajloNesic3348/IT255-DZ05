import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../../models/room';

@Component({
    selector: 'room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
    
    @Input() room: Room;

    constructor() { }
    
    ngOnInit() {
    }
    
}
