import {PlaceService} from "./services/place.service";
import {flatMap} from"rxjs/operators";
import {HomeComponent} from "./components/home.component";

let home=new HomeComponent();
home.draw();