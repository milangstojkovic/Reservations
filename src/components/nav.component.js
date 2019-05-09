import {DropDownComponent} from "./dropdown.component";
import { TypeService } from "../services/type.service";
import {Router} from "../router/router"
import {PlaceService} from "../services/place.service";

import {fromEvent,of} from "rxjs";
import {map, debounceTime, filter, switchMap, delay, tap} from 'rxjs/operators';
import { CardPlaceComponent } from "./cardPlace.component";

export class NavComponent {
    constructor() {
        this._content=document.getElementById("nav");
        this._typeService=new TypeService();
        this._router=new Router();
        this._placeService=new PlaceService();
        this._places=new Array();
    }

    draw(){
        this._content.innerHTML=`<nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
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
              <a class="nav-link" href="#checkReservation" id="checkRes">Proveri Rezervaciju</a>
            </li>
          </ul>
          <div id="spinner" class="spinner-grow" hidden></div>
          <form class="form-inline my-2 my-lg-0">
            <input id="placeSearch" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          </form>
        </div>
      </nav>`;
        const div=document.getElementById("dropdown-menu");
        this._typeService.getTypes().subscribe(types=>types.forEach(type=>new DropDownComponent(div).draw(type)));
        document.getElementById("checkRes").onclick=ev=>{this._router.navigate(2)};
        document.querySelectorAll("#showHome").forEach(element=>element.onclick=ev=>{this._router.navigate(0)});
        const placeSearch=document.getElementById("placeSearch");
        this._placeService.getPlaces().subscribe(places=>this._places=places);
        const getPlaceName = ({ name }) =>`${name.toLowerCase()}`;

        const spinner=document.getElementById("spinner");

        const isPlaceMatching = (place, query) =>
        getPlaceName(place).startsWith(query.toLowerCase());

        const getPlaces = query =>
        of(this._places.filter(place => isPlaceMatching(place, query))).pipe(delay(3000),tap(spinner.hidden=false));

        const onPlacesLoadSuccess = matchingPlaces => {
          spinner.hidden=true;
          this._router.navigate(1,0);
          const div=document.getElementById("album-row");
          matchingPlaces.forEach(place=>new CardPlaceComponent(place,div).draw());
        };

        const placeSearch$ = fromEvent(placeSearch, 'input').pipe(
          map(event => event.target.value),
          filter(query => query),
          debounceTime(1000),
          switchMap(getPlaces)
        );

        placeSearch$.subscribe(onPlacesLoadSuccess);
    }


}