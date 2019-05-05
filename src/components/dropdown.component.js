import {Router} from "../router/router"

export class DropDownComponent {
    constructor(div) {
        this._content=div;
    }

    draw(element) {
        /*this._content.innerHTML+=`   
        <button class="dropdown-item" href="#" id="dugme" value="${element.name}">${element.name}</button>`;*/
        const item=document.createElement("button");
        item.id="button";
        item.className="dropdown-item";
        item.value=element.name;
        item.innerHTML=element.name;
        this._content.appendChild(item);
        item.onclick=(ev)=>this.drawPlaces(element.id);
    }

    drawPlaces(id) {
        const router=new Router();
        router.navigate(1,id);
    }
}