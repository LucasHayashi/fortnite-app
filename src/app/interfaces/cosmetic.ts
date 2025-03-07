export interface ICosmetic {
  id?: string;
  name?: string;
  description?: string;
  type?: Rarity;
  rarity?: Rarity;
  series?: Series;
  introduction?: Introduction;
  images?: Images;
  variants?: Variant[];
  added?: Date;
}

export interface Images {
  smallIcon?: string;
  icon?: string;
  featured?: string;
  other?: Array<any>;
}

export interface Introduction {
  chapter?: string;
  season?: string;
  text?: string;
  backendValue?: number;
}

export interface Rarity {
  value?: string;
  displayValue?: string;
  backendValue?: string;
}

export interface Series {
  value?: string;
  image?: string;
  colors?: string[];
  backendValue?: string;
}

export interface Variant {
  channel?: string;
  type?: string;
  options?: Option[];
}

export interface Option {
  tag?: string;
  name?: string;
  image?: string;
}
