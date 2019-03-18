export interface Werker {
  type: string;
  id?: number;
  name_first: string;
  name_last: string;
  email: string;
  URL_photo: string;
  bio?: string;
  phone?: string;
  last_minute?: boolean;
  latitude?: number;
  longitude?: number;
  shifts?: Shift[];
  certifications?: Certification[];
  positions?: Position[];
}

export interface Certification {
  id: number;
  certName: string;
  url_Photo: string;
}

export interface Position {
  id: number;
  position: string;
  shift?: Shift;
  filled?: boolean;
}

export interface Maker {
  type: string;
  id?: number;
  name: string;
  email: string;
  URL_photo: string;
  phone?: string;
  shifts?: Shift[];
}

export interface Shift {
  id: number;
  name: string;
  time_date: Date;
  duration: number;
  address: string;
  latitude: number;
  longitude: number;
  description: string;
  positions: Position[];
}

