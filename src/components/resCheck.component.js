import {ReservationService} from "../services/reservation.service";
import {PlaceService} from "../services/place.service";
import {fromEvent} from "rxjs";

export class ResCheckComponent {
    constructor() { 
        this._content=document.getElementById("content");
        this._reservations=new ReservationService();
     }

    draw() {
        this._content.innerHTML=`<input id="resId"></input>
                                <p> Unesite broj vase rezervacije </p>`;
        const searchBtn=document.createElement("button");
        searchBtn.className="btn btn-outline-success";
        searchBtn.innerHTML="Pretrazi";
        this._content.appendChild(searchBtn);
        searchBtn.onclick=(ev)=>this.drawRes();
    }


    drawRes() {
        let numofTable=document.getElementById("resId").value;
        if(isNaN(numofTable)){
            alert("Unesite broj!")
            return;
        }
        
    }
}