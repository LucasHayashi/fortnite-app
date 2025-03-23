export interface INews {
  br: Br;
  stw: Br;
  creative: null;
}

export interface Br {
  hash: string;
  date: string;
  image: null | string;
  motds: MOTD[] | null;
  messages: Message[] | null;
}

export interface Message {
  title: string;
  body: string;
  image: string;
  adspace: null;
}

export interface MOTD {
  id: string;
  title: string;
  tabTitle: string;
  body: string;
  image: string;
  tileImage: string;
  sortingPriority: number;
  hidden: boolean;
}
