import {from} from "rxjs";

export class TableService {
    constructor()

    getTables() {
        return from(fetch("http://localhost:3000/tables")
            .then(resolve=>{return resolve.json()})
        );
    }
}