import {from} from "rxjs";

export class PlaceService {
    constructor()

    getPlaces() {
        return from(fetch("http://localhost:3000/places")
            .then(resolve=>{return resolve.json()})
        );
    }
}