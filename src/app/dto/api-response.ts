type DoorDto = {
    obj: string;
    status: string;
}

export interface ApiResponse {
    carWinCount: number;
    goatWinCount: number;
    iterations: {
        initialState: DoorDto[],
        firstDoorOpenState: DoorDto[],
        secondDoorOpenState: DoorDto[],
        won: string
    }[]
}
