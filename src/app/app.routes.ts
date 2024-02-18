import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ToursComponent } from './components/tours/tours.component';
import { NewDestinationComponent } from './components/new-destination/new-destination.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tours', component: ToursComponent },
  { path: 'newDestination', component: NewDestinationComponent },
];
