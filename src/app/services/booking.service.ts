import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Booking } from './Booking';
// import { MessageService } from './message.service';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  @Injectable({ providedIn: 'root' })
export class BookingService {

  private bookingUrl = 'api/bookings';  // URL to web api

  constructor(
    private http: HttpClient) { }

  /** GET bookings from the server */
  getBookings (): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.bookingUrl)
      .pipe(
        tap(_ => this.log('fetched bookings')),
        catchError(this.handleError('getBookings', []))
      );
  }

  /** GET booking by id. Return `undefined` when id not found */
  getBookingNo404<Data>(id: number): Observable<Booking> {
    const url = `${this.bookingUrl}/?id=${id}`;
    return this.http.get<Booking[]>(url)
      .pipe(
        map(bookings => bookings[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} booking id=${id}`);
        }),
        catchError(this.handleError<Booking>(`getBooking id=${id}`))
      );
  }
 /** GET booking by id. Will 404 if id not found */
 getBooking(id: number): Observable<Booking> {
    const url = `${this.bookingUrl}/${id}`;
    return this.http.get<Booking>(url).pipe(
      tap(_ => this.log(`fetched booking id=${id}`)),
      catchError(this.handleError<Booking>(`getBooking id=${id}`))
    );
  }

  serachBookings(term: string): Observable<Booking[]> {
  if (!term.trim()) {
      return of([]);
  }
  return this.http.get<Booking[]>(`${this.bookingUrl}/?name=${term}`).pipe(
      tap(_ => this.log('found match')), catchError(this.handleError<Booking[]>('searchBookings', []))
  );
  }
//////// Save methods //////////

  /** POST: add a new booking to the server */
  addBooking (booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(this.bookingUrl, booking, httpOptions).pipe(
    tap((booking: Booking) => this.log(`added booking w/ id=${booking.id}`)),
      catchError(this.handleError<Booking>('addBooking'))
    );
  }

  /** DELETE: delete the booking from the server */
  deleteBooking (booking: Booking | number): Observable<Booking> {
    const id = typeof booking === 'number' ? booking : booking.id;
    const url = `${this.bookingUrl}/${id}`;

    return this.http.delete<Booking>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted booking id=${id}`)),
      catchError(this.handleError<Booking>('deleteBooking'))
    );
  }

  /** PUT: update the booking on the server */
  updateBooking (booking: Booking): Observable<any> {
    return this.http.put(this.bookingUrl, booking, httpOptions).pipe(
      tap(_ => this.log(`updated booking id=${booking.id}`)),
      catchError(this.handleError<any>('updateBooking'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
     // need to implement message service
    // this.messageService.add(`BookingService: ${message}`);
  }

}
