import {TypeService} from "../services/type.service";
import { Router } from "../router/router";

export class MainHomeComponent {
    constructor() {
        this._content=document.getElementById("content");
        this._typeService=new TypeService();
        this._router=new Router();
    }

    draw() {
        let contentDiv=document.createElement("div");
        contentDiv.className="row";
        this._typeService.getTypes().subscribe(types=>types.forEach(type=>this.drawType(type,contentDiv)));
        this._content.appendChild(contentDiv);
     
    }

    drawType(type,div) {
        let typeDiv=document.createElement("div");
        typeDiv.className="col-4";
        typeDiv.innerHTML=`<img src=${type.img} width='140' height='140' class='rounded-circle'>
        <h2>${type.name}</h2>
        <p>${type.desc}</p>
        <p><button class='btn btn-secondary' role='button' id='${type.id}' value=${type.name}>Rezervisi »</button></p>`;
    div.appendChild(typeDiv);
        document.getElementById(type.id).onclick=(ev)=>this._router.navigate(1,type.id);
    }
}