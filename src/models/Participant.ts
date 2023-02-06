import { GameUser } from "./GameUser";
import { Payment } from "./Payment";
import { PlayerWeight } from "./PlayerWeight";

export interface Participant {
    // participantId: number;
    user: GameUser;
    weightGoal: number;
    vacationStart: Date
    status: string;
    weights: PlayerWeight[];
    payments: Payment[];
}
