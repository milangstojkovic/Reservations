import {FooterComponent} from "./footer.component";
import {MainHomeComponent} from "./mainHome.component";
import {NavComponent} from "./nav.component";


export class HomeComponent {
    constructor() {
        this._content=document.getElementById("content");
    }
    draw() {
       // let footerComponent=new FooterComponent();
        //footerComponent.draw();
        let navComponent=new NavComponent();
        navComponent.draw();
        let mainComponent=new MainHomeComponent();
        mainComponent.draw();
    }
}