export interface Stats {
    account?: Account;
    battlePass?: BattlePass;
    image?: string;
    stats?: StatsClass;
}

export interface Account {
    id?: string;
    name?: string;
}

export interface BattlePass {
    level?: number;
    progress?: number;
}

export interface StatsClass {
    all?: All;
    keyboardMouse?: All;
    gamepad?: All;
    touch?: All;
}

export interface All {
    overall?: Overall;
    solo?: Overall | null;
    duo?: Overall | null;
    trio?: null;
    squad?: Overall | null;
    ltm?: Overall | null;
}

export interface Overall {
    score?: number;
    scorePerMin?: number;
    scorePerMatch?: number;
    wins?: number;
    top5?: number;
    top12?: number;
    kills: number;
    killsPerMin?: number;
    killsPerMatch?: number;
    deaths?: number;
    kd?: number;
    matches?: number;
    winRate?: number;
    minutesPlayed?: number;
    playersOutlived?: number;
    lastModified?: Date;
    top3?: number;
    top6?: number;
    top10?: number;
    top25?: number;
}