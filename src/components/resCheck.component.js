import {ReservationService} from "../services/resevration.service";
import {PlaceService} from "../services/place.service";
import {fromEvent} from "rxjs";

export class ResCheckComponent {
    constructor() { 
        this._content=document.getElementById("content");
        this._reservations=new ReservationService();
     }

    draw() {
        this._content.innerHTML=`<input id="resId"></input>
                                <p> Unesite broj vase rezervacije </p>
                                <button id="searchRes" type="button" class="btn btn-outline-success">Pretrazi</button>`;
        fromEvent(button,'click')
        (this._reservations.getReservations().filter(reservation=>reservation.id))
    }
}