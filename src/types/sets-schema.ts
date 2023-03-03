export interface ISet {
  wins: number;
  losses: number;
  ties: number;
}

export interface IElo {
  starting: number;
  current: number;
  change: number;
  ending: number;
}

export interface IUserState {
  elo: IElo;
  sets: ISet[];
  candy: number;
  candyXL: number;
}
