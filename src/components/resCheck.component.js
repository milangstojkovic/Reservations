import {ReservationService} from "../services/resevration.service";
import {PlaceService} from "../services/place.service";

export class ResCheck {
    constructor() { 
        this._content=document.getElementById("content");
     }

    draw() {
        this._content.innerHTML=`<input id="resId"></input>
                                <p> Unesite broj vase rezervacije </p>
                                <button type="button" class="btn btn-outline-success">Pretrazi</button>`;
    }
}