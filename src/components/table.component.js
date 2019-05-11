import {ReservationService} from "../services/reservation.service"
import {last} from "rxjs/operators";
import { from } from "rxjs";

export class TableComponent {
    constructor(table,num) {
        this._table=table;
        let str="row"+table.id%num;
        this._container=document.getElementById(str);
        this.draw();
        this._reservationService=new ReservationService();
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
                                <tr><td></td><td>DO: <input id="endTime" type="time" step="3600" min="12:59" max="23:59" required></td></tr>
                                <tr><td></td><td><button id="resTable" type="button" class="btn btn-outline-success">Rezervisi</button></td></tr>`;
        modalBody.appendChild(tableContent);
        document.getElementById("resTable").onclick=(ev)=>this.resTable();
    }

    resTable() {
        let resName=document.getElementById("resName").value;
        let resDate=document.getElementById("resDate").value;
        let startTime=document.getElementById("startTime").value;
        let endTime=document.getElementById("endTime").value;
        if(!resName || !resDate || !startTime || !endTime || endTime<startTime) {
            alert("Unesite sve podatke i proverite da li su ispravni!");
            return;
        }
        if(this.checkRes(resDate,startTime,endTime)) {
            let reservation=new Object();;
            reservation.idPlace=this._table.idPlace;
            reservation.idTable=this._table.id;
            reservation.name=resName;
            reservation.date=resDate;
            reservation.startTime=startTime;
            reservation.endTime=endTime;
            this._reservationService.writeReservation(reservation).then(this._reservationService.getReservations().subscribe(reservations=>this.toogleResAccepted(reservations[reservations.length-1])));
        }
    }

    checkRes(date,startTime,endTime) {
        this._reservationService.getReservations().subscribe(reservations=>reservations
            .filter(res=>(res.idPlace==this._table.idPlace) && (res.idTable==this._table.id) && (res.date==date))
            .forEach(res=>{if(!this.checkTime(res,startTime,endTime))
                            return false}));
        return true;
    }

    checkTime(res,startTime,endTime) {
        if((startTime>=res.startTime && startTime<res.endTime)||
            (endTime>res.startTime && endTime<=res.endTime)||
            (startTime<=res.startTime && endTime>=res.endTime)) {
                $("#myModal").modal();
                document.getElementById("modal-footer").style.backgroundColor="red";
                document.getElementById("modal-header").style.backgroundColor="red";
                document.getElementById("modal-body").innerHTML=`Sto koji pokusavate da rezervisete zauzet je od ${res.startTime} do ${res.endTime} tog dana.
                <img src="src/resources/failedRes.png" id="modal-img">`;
                document.getElementById("modal-img").src="src/resources/failedRes.png";
                return false;
        }
        return true;
    }

    toogleResAccepted(lastRes) {
        let id=lastRes.id;
        id++;
        $("#myModal").modal();
        document.getElementById("modal-footer").style.backgroundColor="Lime";
        document.getElementById("modal-header").style.backgroundColor="Lime";
        document.getElementById("modal-body").innerHTML="Uspesno ste rezervisali sto. ID Vase rezervacije je "+id+" <img src='src/resources/acceptedRes.png' id='modal-img'>";
    }
}