export interface ISet {
  wins: number;
  losses: number;
  ties: number;
}

export interface IUserState {
  elo: { starting: number; current: number; change: number; ending: number };
  sets: ISet[];
  candy: number;
  candyXL: number;
}
