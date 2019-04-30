import {DropDownComponent} from "./dropdown.component";
import { TypeService } from "../services/type.service";
import {flatMap} from "rxjs/operators"

export class NavComponent {
    constructor() {
        this._content=document.getElementById("nav");
        this._typeService=new TypeService();
    }

    draw(){
        this._content.innerHTML=`<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#" id="showHome">REZERVIŠI DANAS</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="showHome">Početna strana<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Mesta
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown" id="dropdown-menu">
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#chechReservation" id="checkRes">Proveri Rezervaciju</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>`;
        const div=document.getElementById("dropdown-menu");
        this._typeService.getTypes().subscribe(types=>types.forEach(type=>new DropDownComponent(div).draw(type)));
    }


}