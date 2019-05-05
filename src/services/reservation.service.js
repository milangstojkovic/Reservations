import {from} from "rxjs";

export class ReservationService{
    constructor() {}

    getReservations() {
        return from(fetch("http://localhost:3000/reservations")
            .then(resolve=>{return resolve.json()})
        );
    }

    writeReservation(reservation) {
            return new Promise((res, rej) => {
                setTimeout(() => res(fetch("http://localhost:3000/reservations", {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(reservation)
                }),5))
            })
    }

    getReservationById(id) {
        return from(fetch("http://localhost:3000/reservations/" + id)
            .then(resolve=>{return resolve.json()})
        );
    }
}
