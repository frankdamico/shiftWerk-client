import { BooleanValueAccessor } from '@ionic/angular';

export interface Werker {
  type: string;
  id?: number;
  name_first: string;
  name_last: string;
  email: string;
  url_photo: string;
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
  payment_type: string;
  focused?: boolean;
}

export interface Maker {
  type: string;
  id?: number;
  name: string;
  email: string;
  url_photo: string;
  phone?: string;
  shifts?: Shift[];
}

export interface Shift {
  id: number;
  name: string;
  start: Date;
  end: Date;
  duration: number;
  address: string;
  description: string;
  positions: Position[];
}

