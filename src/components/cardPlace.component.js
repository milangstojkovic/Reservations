import { Router } from "../router/router";


export class CardPlaceComponent {
    constructor(place,div) {
        this._content=div;
        this._place=place;
        this._router=new Router();
    }

    draw() {
        const colCard=document.createElement("div");
        colCard.className="col-4";
        colCard.innerHTML=` <div class="card" style="width: 18rem;">
                            <img src="${this._place.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${this._place.name}</h5>
                            <button id="${this._place.id}" class="btn btn-sm btn-outline-secondary">Rezervisi>></button>
                            </div>
                            </div>`;
        this._content.appendChild(colCard);
        document.getElementById(this._place.id).onclick=(ev)=>this._router.navigate(3,this._place.id);
    }
}