import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { BookingSearchComponent } from './booking-search/booking-search.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingAddComponent } from './booking-add/booking-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'bookings', component: BookingsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: BookingDetailComponent },
  { path: 'addbooking', component: BookingAddComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}