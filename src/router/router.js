

export class Router {
    constructor(){}

    navigate(val) {
        switch (val) {
            case 0:{
                navigateHome();
                break;
            }
            case 1:{
                navigatePlaces(type);
                break;
            }
            case 2:{
                navigateReservationCheck();
                break;
            }
        }
    }

    navigateHome() {
        let homeComponent=new HomeComponent();
        homeComponent.draw();
    }

    navigatePlaces(type) {
        let placeComponent=new placeComponent();
    }

    navigateReservationCheck() {
        let reservationComponent= new ReservationComponent();
        reservationComponent.draw();
    }
}