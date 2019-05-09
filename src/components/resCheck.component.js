import {ReservationService} from "../services/reservation.service";
import {PlaceService} from "../services/place.service";

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
        searchBtn.id="searchBtn";
        searchBtn.innerHTML="Pretrazi";
        this._content.appendChild(searchBtn);
        searchBtn.onclick=(ev)=>{
            let numofTable=document.getElementById("resId").value;
            if(isNaN(numofTable)){
                alert("Unesite broj!")
                return;
            }
            this._reservations.getReservationById(numofTable).subscribe(res=>this.drawRes(res));
        }
    }


    drawRes(res) {
        if(!res.date) {
            $("#myModal").modal();
            document.getElementById("modal-footer").style.backgroundColor="red";
            document.getElementById("modal-header").style.backgroundColor="red";
            document.getElementById("modal-body").innerHTML="REZERVACIJA NE POSTOJI!";
            return;
        }
        $("#myModal").modal();
        document.getElementById("modal-footer").style.backgroundColor="white";
        document.getElementById("modal-header").style.backgroundColor="white";
        new PlaceService().getPlaces().subscribe(places=>places.filter(place=>place.id==res.idPlace).forEach(place=>this.drawPlaceName(place)));
        document.getElementById("modal-body").innerHTML=`<table><tr><td>Ime:</td><td>${res.name}</td></tr>
                                    <tr><td>Mesto:</td><td id="placeName"></td></tr>
                                    <tr><td>Broj stola:</td><td>${res.idTable}</td></tr>
                                    <tr><td>Datum:</td><td>${res.date}</td></tr>
                                    <tr><td>Vreme pocetka:</td><td>${res.startTime}</td></tr>
                                    <tr><td>Vreme kraja:</td><td>${res.endTime}</td></tr>`;
    }
    
    drawPlaceName(place) {
        document.getElementById("placeName").innerHTML=place.name;
    }
}