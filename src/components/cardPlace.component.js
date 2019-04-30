

export class CardPlaceComponent {
    constructor(place,div) {
        this._content=div;
        this._place=place;
    }

    draw() {
        const colCard=document.createElement("div");
        colCard.className="col-4";
        colCard.innerHTML=` <div class="card" style="width: 18rem;">
                            <img src="${this._place.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${this._place.name}</h5>
                            <p class="card-text">${this._place.description}</p>
                            <button href="#" class="btn btn-sm btn-outline-secondary">Rezervisi>></button>
                            </div>
                            </div>`;
        this._content.appendChild(colCard);
    }
}