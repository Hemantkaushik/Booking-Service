import { parseHttpResponse } from "selenium-webdriver/http";

export class Booking {
    id: number;
    name: string;
    phone: number;
    Email: string;
    Address: string;
    NoOFGuestes: number;
    Allergy: string ;
    BookingDate: string;

    /* constructor(public _name: string, public _phone: number, public _email: string , public _address: string) {
      this.name = _name;
      this.phone = _phone;
      this.Email = _email;
      this.Address = _address;
    } */
  }
