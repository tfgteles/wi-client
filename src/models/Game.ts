import { Participant } from "./Participant";

export interface Game {
    // gameId: number;
    name: string;
    info?: string;
    startDate: Date;
    numberOfWeights: number;
    weightFrequency: string;
    minWeightLoss: number;
    weightUnit?: string;
    fee: number;
    currency: string;
    vacationLength: number;
    isLastWeightPaid: boolean;
    participants: Participant[];
}
