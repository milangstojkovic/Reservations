import { fromEvent } from "rxjs";
import {ReservationService} from "../services/reservation.service"

export class TableComponent {
    constructor(table,num) {
        this._table=table;
        let str="row"+table.id%num;
        this._container=document.getElementById(str);
        this.draw();
    }

    draw() {
        const cellTable=document.createElement("button");
        cellTable.id="cell-table";
        cellTable.className="cellTable";
        cellTable.value=this._table.id;
        cellTable.style="border:1px solid";
        cellTable.onclick=(ev)=>this.drawRes(ev.target);
        if(this._table.smoking)
            cellTable.innerHTML="<p>"+this._table.id +"</p><p> "+"pusacki";
        else 
            cellTable.innerHTML="<p>"+this._table.id +"</p><p> "+"nepusacki";
        this._container.appendChild(cellTable);
    }
    drawRes(btn){
        const modalBody=document.getElementById("res-body");
        modalBody.innerHTML="";
        const tableContent=document.createElement("table");
        let today = new Date().toISOString().split('T')[0];
        tableContent.innerHTML=`<tr><td>Izabrali ste sto broj </td><td>${this._table.id}</td></tr>
                                <tr><td>Broj mesta za ovim stolom je</td><td> ${this._table.numSeats}</td></tr>
                                <tr><td>Unesite ime:</td><td><input id="resName" required></td></tr>
                                <tr><td>Izaberite datum</td><td><input id="resDate" type="date" min=${today}></td></tr>
                                <tr><td>Izaberite vreme</td><td>OD: <input id="startTime" type="time" step="3600" min="12:00" max="23:59" required></td></tr>
                                <tr><td></td><td>DO: <input id="endTime" type="time" step="3600" min="12:00" max="23:59" required></td></tr>
                                <tr><td></td><td><button id="resTable" type="button" class="btn btn-outline-success">Rezervisi</button></td></tr>`;
        modalBody.appendChild(tableContent);
        document.getElementById("resTable").onclick=(ev)=>this.resTable();
    }
    resTable() {
        let reservation=new Object();;
        reservation.idPlace=this._table.idPlace;
        reservation.idTable=this._table.id;
        reservation.name=document.getElementById("resName").value;
        reservation.date=document.getElementById("resDate").value;
        reservation.startTime=document.getElementById("startTime").value;
        reservation.endTime=document.getElementById("endTime").value;
        let ResService=new ReservationService();
        ResService.writeReservation(reservation);
    }
}