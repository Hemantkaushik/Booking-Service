import { Component, OnInit } from '@angular/core';
import { Booking } from '../services/booking';
import { BookingService } from '../services/booking.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-booking-add',
  templateUrl: './booking-add.component.html',
  styleUrls: ['./booking-add.component.css']
})
export class BookingAddComponent implements OnInit {
  bookings: Booking[];
  constructor(private bookingService: BookingService, private location: Location) {  }

  ngOnInit() {
    this.getBookings();
  }
  getBookings(): void {
    this.bookingService.getBookings()
    .subscribe(bookings => this.bookings = bookings);
  }
  goBack(): void {
    this.location.back();
    }

add(name: string , phone:  number , email: string , address: string): void {
  name = name.trim();
  email = email.trim();
  address = address.trim();
  if (!name) { alert('Name is required'); return; }
  if (!phone) { alert('Phone number is required'); return; }
  if (!email) { alert('Email address is required'); return; }
  const book = new Booking();
  book.name = name;
  book.phone = phone;
  book.Email = email;
  book.Address = address;
  this.bookingService.addBooking(book as Booking)
    .subscribe(booking => {
      this.bookings.push(booking);
    });
    name = '';
    this.goBack();
}
}
