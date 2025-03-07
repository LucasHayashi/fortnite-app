export interface ISearchPlayer {
  result: boolean;
  account_id?: string;
  error?: SearchPlayerNotFound;
}

export interface SearchPlayerNotFound {
  code: string;
}
