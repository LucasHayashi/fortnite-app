export interface Map {
  images: Images;
  pois: Pois[];
}

export interface Images {
  blank: string;
  pois: string;
}

export interface Pois {
  id: string;
  name: string;
  location: Location;
}

export interface Location {
  x: number;
  y: number;
  z?: number;
}
