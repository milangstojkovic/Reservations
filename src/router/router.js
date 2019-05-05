import {HomeComponent} from "../components/home.component";
import {AlbumComponent} from "../components/album.component";
import {ResCheckComponent} from "../components/resCheck.component";
import { PlaceComponent } from "../components/place.component";

export class Router {
    constructor(){}

    navigate(val,id) {
        document.getElementById("content").innerHTML="";
        switch (val) {
            case 0:{
                this.navigateHome();
                break;
            }
            case 1:{
                this.navigateAlbum(id);
                break;
            }
            case 2:{
                this.navigateReservationCheck();
                break;
            }
            case 3:{
                this.navigatePlace(id);
                break;
            }
        }
    }

    navigateHome() {
        let homeComponent=new HomeComponent();
        homeComponent.draw();
    }

    navigateAlbum(type) {
        let albumComponent=new AlbumComponent(type).draw();
    }

    navigateReservationCheck() {
        let reservationComponent= new ResCheckComponent();
        reservationComponent.draw();
    }
    
    navigatePlace(id) {
        let placeComponent=new PlaceComponent(id);
    }
}