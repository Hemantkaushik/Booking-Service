import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Booking } from '../services/booking';
import { BookingService } from '../services/booking.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-booking-search',
  templateUrl: './booking-search.component.html',
  styleUrls: ['./booking-search.component.css']
})
export class BookingSearchComponent implements OnInit {

  bookings$: Observable<Booking[]>;
  private searchTerms = new Subject<string>();
  constructor(private bookingService: BookingService) { }

   // Push a search term into the observable stream.
  search(term: string): void {
      this.searchTerms.next(term);
  }
  ngOnInit() {
    this.bookings$ = this.searchTerms.pipe(
       // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.bookingService.serachBookings(term)),
    )
  }

}
