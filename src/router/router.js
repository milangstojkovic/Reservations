

export class Router {
    constructor(){}

    navigate(val) {
        switch (val) {
            case 0: navigateHome();
            case 1: navigatePlaces();
            case 2: navigateReservationCheck();
        }
    }

    navigateHome() {
        let homeComponent=new HomeComponent();
        homeComponent.draw();
    }

    navigatePlaces() {
        let placeComponent=new placeComponent();
        placeComponent.draw();
    }

    navigateReservationCheck() {
        let reservationComponent= new ReservationComponent();
        reservationComponent.draw();
    }
}