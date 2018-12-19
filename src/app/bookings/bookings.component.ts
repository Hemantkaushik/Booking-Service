import { Component, OnInit } from '@angular/core';
import { Booking } from '../services/booking';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings: Booking[];
  p: number = 1;
  constructor(private bookingService: BookingService) {  }

  ngOnInit() {
    this.getBookings();
  }

  getBookings(): void {
  this.bookingService.getBookings()
  .subscribe(bookings => this.bookings = bookings);
}

delete(booking: Booking): void {
  this.bookings = this.bookings.filter(h => h !== booking);
  this.bookingService.deleteBooking(booking).subscribe();
}

}
