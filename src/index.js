import {PlaceService} from "./services/place.service";
import {flatMap} from"rxjs/operators";
import {HomeComponent} from "./components/home.component";
import {AlbumComponent} from "./components/album.component";
import {PlaceComponent} from "./components/place.component";
import {ResCheckComponent} from "./components/resCheck.component";

let home=new PlaceComponent(1);
home.draw();