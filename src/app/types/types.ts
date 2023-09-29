export type DoorDto = {
    obj: string;
    status: string;
}

export type IterationType = {
    initialState: DoorDto[],
    firstDoorOpenState: DoorDto[],
    secondDoorOpenState: DoorDto[],
    finalState: DoorDto[],
    won: string
}