import { fromEvent } from "rxjs";


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
        cellTable.onclick=(ev)=>this.rezervisiSto(ev.target);
        if(this._table.smoking)
            cellTable.innerHTML="<p>"+this._table.id +"</p><p> "+"pusacki";
        else 
            cellTable.innerHTML="<p>"+this._table.id +"</p><p> "+"nepusacki";
        this._container.appendChild(cellTable);
    }
    rezervisiSto(btn){
        const modalBody=document.getElementById("res-body");
        modalBody.innerHTML="";
        const tableContent=document.createElement("table");
        let today = new Date().toISOString().split('T')[0];
        tableContent.innerHTML=`<tr><td>Izabrali ste sto broj </td><td>${this._table.id}</td></tr>
                                <tr><td>Broj mesta za ovim stolom je</td><td> ${this._table.numSeats}</td></tr>
                                <tr><td>Izaberite datum</td><td><input type="date" min=${today}></td></tr>
                                <tr><td>Izaberite vreme</td><td><input type="time"></td></tr>
                                <tr><td></td><td><button type="button" class="btn btn-outline-success">Rezervisi</button></td></tr>`;
        modalBody.appendChild(tableContent);
    }
}