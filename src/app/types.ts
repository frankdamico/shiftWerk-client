export class Werker {
  id: number;
  name_first: string;
  name_last: string;
  email: string;
  URL_photo: string;
  bio: string;
  phone: string;
  last_minute: boolean;
  latitude: number;
  longitude: number;
  shifts: Array<Shift>;
}

export class Maker {
  id: number;
  name: string;
  email: string;
  URL_photo: string;
  phone: string;
  shifts: Array<Shift>;
}

export class Shift {
  id: number;
  name: string;
  time_date: Date;
  duration: number;
  address: string;
  latitude: number;
  longitude: number;
  description: string;
}

