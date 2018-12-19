import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Booking } from './booking';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })

  export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const bookings = [
            { id: 11, name: 'Mr. Nice', phone: 420455558 , Email: 'hemantkaushik82@gmail.com', Address : '16 Sorghum Way',
            NoOFGuestes: 5, Allergy : 'none', BookingDate: '18/12/2018' },
            { id: 12, name: 'Narco', phone: 420455558 , Email: 'hemantkaushik82@gmail.com', Address : '16 Sorghum Way',
            NoOFGuestes: 5, Allergy : 'none', BookingDate: '18/12/2018' },
            { id: 13, name: 'Bombasto', phone: 420455558 , Email: 'hemantkaushik82@gmail.com', Address : '16 Sorghum Way',
            NoOFGuestes: 5, Allergy : 'none', BookingDate: '18/12/2018' },
            { id: 14, name: 'Celeritas', phone: 420455558 , Email: 'hemantkaushik82@gmail.com', Address : '16 Sorghum Way',
            NoOFGuestes: 5, Allergy : 'none', BookingDate: '18/12/2018' },
            { id: 15, name: 'Magneta', phone: 420455558 , Email: 'hemantkaushik82@gmail.com', Address : '16 Sorghum Way',
            NoOFGuestes: 5, Allergy : 'none', BookingDate: '18/12/2018' },
            { id: 16, name: 'RubberMan', phone: 420455558 , Email: 'hemantkaushik82@gmail.com', Address : '16 Sorghum Way',
            NoOFGuestes: 5, Allergy : 'none', BookingDate: '18/12/2018' },
            { id: 17, name: 'Dynama' , phone: 420455558 , Email: 'hemantkaushik82@gmail.com', Address : '16 Sorghum Way',
            NoOFGuestes: 5, Allergy : 'none', BookingDate: '18/12/2018'},
            { id: 18, name: 'Dr IQ' , phone: 420455558 , Email: 'hemantkaushik82@gmail.com', Address : '16 Sorghum Way',
            NoOFGuestes: 5, Allergy : 'none', BookingDate: '18/12/2018'},
            { id: 19, name: 'Magma' , phone: 420455558 , Email: 'hemantkaushik82@gmail.com', Address : '16 Sorghum Way',
            NoOFGuestes: 5, Allergy : 'none', BookingDate: '18/12/2018'},
            { id: 20, name: 'Tornado', phone: 420455558 , Email: 'hemantkaushik82@gmail.com', Address : '16 Sorghum Way',
            NoOFGuestes: 5, Allergy : 'none', BookingDate: '18/12/2018' }
          ];
      return {bookings};
    }

    genId(bookings: Booking[]): number {
        return bookings.length > 0 ? Math.max(...bookings.map(booking => booking.id)) + 1 : 11;
    }
}