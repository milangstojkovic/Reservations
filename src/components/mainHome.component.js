import {SliderComponent} from "./slider.component";
import {TypeService} from "../services/type.service";
import {flatMap} from"rxjs/operators";

export class MainHomeComponent {
    constructor() {
        this._content=document.getElementById("content");
        this._typeService=new TypeService();
    }

    draw() {
        const sliderDiv=document.createElement("div");
        let sliderComponent=new SliderComponent();
        sliderComponent.draw(sliderDiv);
        this._content.appendChild(sliderDiv);
        let contentDiv=document.createElement("div");
        const types=this._typeService.getTypes().pipe(flatMap(type=>type)).subscribe(type=>type);
        types.forEach(element => drawType(element,contentDiv));
     
    }

    drawType(type,div) {
        let typeDiv=document.createElement("div");
        typeDiv.innerHTML=`<div class='col-4'>
        <img src=${type.img} width='140' height='140' class='rounded-circle'>
        <h2>${type.name}</h2>
        <p>${type.desc}</p>
        <p><button class='btn btn-secondary' role='button' id='dugme' value=${type.name}>Rezervisi »</button></p>
    </div>`;
    div.appendChild(typeDiv);
    }
}