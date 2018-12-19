import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Booking } from '../services/booking';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {
@Input() booking: Booking;
  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private location: Location) { }

  ngOnInit() {
    this.getBooking();
  }
getBooking(): void {
const id = +this.route.snapshot.paramMap.get('id');
this.bookingService.getBooking(id).subscribe(booking => this.booking = booking);
}
goBack(): void {
this.location.back();
}

save(): void {
  this.bookingService.updateBooking(this.booking).subscribe(() => this.goBack());
}
}
