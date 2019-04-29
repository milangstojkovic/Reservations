

export class DropDownComponent {
    constructor(div) {
        this._content=div;
    }

    draw(element) {
        this._content.innerHTML+=`   
        <button class="dropdown-item" href="#" id="dugme" value="${element.ime}">${element.ime}</button>`
    }
}