export interface Advice {
    id: number;
    advice: string;
}

export interface AdviceSlipResponse {
    slip: Advice;
}

export interface AdviceQuery {
    total_result: string;
    query: string;
    slips: Advice[];
}
