import { Component, OnInit } from '@angular/core';
import { Booking } from '../services/booking';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 bookings: Booking[] = [];
  constructor( private bookingService: BookingService) { }

  ngOnInit() {
    this.getBookings();
  }
getBookings(): void {
  this.bookingService.getBookings().subscribe(bookings => this.bookings = bookings.slice(1, 5));
}
}
