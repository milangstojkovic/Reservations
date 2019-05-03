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
        cellTable.onclick=(ev)=>this.rezervisiSto(ev.target.value);
        if(this._table.smoking)
            cellTable.innerHTML="<p>"+this._table.id +"</p><p> "+"pusacki";
        else 
            cellTable.innerHTML="<p>"+this._table.id +"</p><p> "+"nepusacki";
        this._container.appendChild(cellTable);
    }
    rezervisiSto(id){
       /* const modal=document.createElement("div");
        modal.innerHTML=`<div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                <h3 id="myModalLabel">Modal header</h3>
                            </div>
                            <div class="modal-body">
                                <p>One fine body…</p>
                            </div>
                            <div class="modal-footer">
                                <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                                <button class="btn btn-primary">Save changes</button>
                            </div>
                        </div>`;*/
                        $('#myModal').modal('toggle');

    }
}