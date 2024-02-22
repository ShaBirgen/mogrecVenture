import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ToursComponent } from './components/tours/tours.component';
import { NewDestinationComponent } from './components/new-destination/new-destination.component';
import { AdminComponent } from './components/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tours', component: ToursComponent },
  { path: 'newDestination', component: NewDestinationComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule, AppRoutingModule],
  exports: [RouterModule,],
})
export class AppRoutingModule {}

