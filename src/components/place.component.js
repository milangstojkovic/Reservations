import {PlaceService} from "../services/place.service";
import {TableService} from "../services/table.service";
import {TableComponent} from "./table.component";
export class PlaceComponent {
    constructor(id) {
        new PlaceService().getPlaces().subscribe(places=>places
            .filter(place=>place.id==id)
            .map(place=>this.draw(place)));
        this._content=document.getElementById("content");
    }

    draw(place) {
        if(!place)
        return;
        const row=document.createElement("div");
        row.className="row";
        this._content.appendChild(row);
        const divPlace=document.createElement("div");
        divPlace.id="divPlace";
        divPlace.className="col-6";
        row.appendChild(divPlace);
            divPlace.innerHTML=`<img src=${place.img} align="left" id="divPlace"><h2>${place.name}</h2>
            <p>${place.description}</p>
            <p>U ovom lokalu mozete cuti live izvodjenje: ${place.music}</p>
            <p>Ocena ovog lokala je: ${place.rating}</p>
            <p>Adresa lokala: ${place.adress}`;
        const divTables=document.createElement("div");
        divTables.className="col-6";
        divTables.id="divTables";
        row.appendChild(divTables);
        let i;
        for(i=0;i<place.numOfTablesInRow;i++) {
            let rowTable=document.createElement("div");
            rowTable.className="row";
            rowTable.id="row"+i;
            row.height="200";
            divTables.appendChild(rowTable);
        }
        new TableService().getTables().subscribe(tables=>tables
            .filter(table=>table.idPlace===place.id)
            .map(table=>new TableComponent(table,place.numOfTablesInRow)));
    }
}
