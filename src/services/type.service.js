import {from} from "rxjs";

export class TypeService {
    constructor() {}

    getTypes() {
        return from(fetch("http://localhost:3000/types")
            .then(resolve=>{return resolve.json()})
        );
    }
}