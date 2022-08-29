import { Space } from "./space";
import { User } from "./user";

export interface Reservation {

    reservation_id: number;
    reservationDuration: number;
    startDate: Date;
    endDate: Date;
    amount: number;
    user: User;
    space: Space;

}
