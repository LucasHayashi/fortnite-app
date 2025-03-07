export interface IPlayerStats {
  result: boolean;
  name: string;
  account: IAccount;
  accountLevelHistory?: IAccountLevelHistoryEntity[] | null;
  global_stats: IKeyboardmouseOrGlobalStats;
  per_input: IPerInput;
  seasons_available?: number[] | null;
}
export interface IAccount {
  level: number;
  progress_pct: number;
}
export interface IAccountLevelHistoryEntity {
  season: number;
  level: number;
  process_pct: number;
}
export interface IKeyboardmouseOrGlobalStats {
  duo: IDuoOrTrioOrSquadOrSolo;
  trio: IDuoOrTrioOrSquadOrSolo;
  squad: IDuoOrTrioOrSquadOrSolo;
  solo: IDuoOrTrioOrSquadOrSolo;
}
export interface IDuoOrTrioOrSquadOrSolo {
  placetop1: number;
  kd: number;
  winrate: number;
  placetop3: number;
  placetop5: number;
  placetop6: number;
  placetop10: number;
  placetop12: number;
  placetop25: number;
  kills: number;
  matchesplayed: number;
  minutesplayed: number;
  score: number;
  playersoutlived: number;
  lastmodified: number;
}
export interface IPerInput {
  keyboardmouse: IKeyboardmouseOrGlobalStats;
  touch: ITouch;
  gamepad: IGamepad;
}
export interface ITouch {
  squad: IDuoOrTrioOrSquadOrSolo;
}
export interface IGamepad {
  solo: IDuoOrTrioOrSquadOrSolo;
}
