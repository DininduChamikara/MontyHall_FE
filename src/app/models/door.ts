import { DoorActions } from "../constants/door-actions";
import { DoorTypes } from "../constants/door-types";

export class Door {
    id: number;
    type: DoorTypes;
    status: DoorActions;

    constructor(id: number){
        this.id = id;
        this.type = DoorTypes.GOAT;
        this.status = DoorActions.CLOSE;
    }
}
