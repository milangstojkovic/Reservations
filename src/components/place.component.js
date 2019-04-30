import {PlaceService} from "../services/place.service"

export class PlaceComponent {
    constructor(id) {
        new PlaceService().getPlaceById(id).subscribe(place=>this.draw(place));
        this._content=document.getElementById("content");
    }

    draw(place) {
        const row=document.createElement("div");
        row.className="row";
        this._content.appendChild(row);
        const divPlace=document.createElement("div");
        divPlace.className="col-6";
        row.appendChild(divPlace);
        divPlace.innerHTML=`<img src=${place.img} align="left"><h2>${place.name}</h2>
                            <p>${place.description}</p>`;
        const divTables=document.createElement("div");
        divTables.className="col-6";
        row.appendChild(divTables);
    }
}