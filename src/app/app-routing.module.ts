import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AboutComponent } from './about/about/about.component';
import { ListPhoneNumbersComponent } from './phone-numbers/list-phone-numbers/list-phone-numbers.component';

const routes: Routes = [
  { path: '', redirectTo: 'phone-numbers-list', pathMatch: 'full' },
  { path: 'phone-numbers-list', component: ListPhoneNumbersComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '404' },
  { path: '404', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
