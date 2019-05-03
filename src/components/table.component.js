

export class TableComponent {
    constructor(table,num) {
        this._table=table;
        let str="row"+table.id%num;
        this._container=document.getElementById(str);
        this.draw();
    }

    draw() {
       /* this._container.innerHTML+=`<div id="cell-table" value=${this._table.id} 
        style="border:1px solid">${this._table.id}</div>`;*/
        const cellTable=document.createElement("div");
        cellTable.id="cell-table";
        cellTable.value=this._table.id;
        cellTable.style="border:1px solid";
        if(this._table.smoking)
            cellTable.innerHTML="<p>"+this._table.id +"</p><p> "+"pusacki";
        else 
            cellTable.innerHTML="<p>"+this._table.id +"</p><p> "+"nepusacki";
        this._container.appendChild(cellTable);
        cellTable.onclick=(ev)=>rezervisiSto();
    }

    rezervisiSto() {
        
    }
}