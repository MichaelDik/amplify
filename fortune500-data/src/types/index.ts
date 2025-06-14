export interface Fortune500Company {
    rank: number;
    name: string;
    revenue: number;
    profit: number;
}

export type Fortune500Data = Fortune500Company[];