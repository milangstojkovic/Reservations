import {PlaceService} from "../services/place.service";
import { CardPlaceComponent } from "./cardPlace.component";

export class AlbumComponent {
    constructor(type) {  
        this._content=document.getElementById("content");
        this._type=type;
        this._placeService=new PlaceService();
    }

    draw() {
        const row=document.createElement("div");
        row.className="row";
        this._content.appendChild(row);
        this._placeService.getPlaces().subscribe(places=>places
            .filter(place=>place.type==this._type)
            .forEach(place=>new CardPlaceComponent(place,row).draw()));
    }
}