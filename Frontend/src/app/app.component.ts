import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { NewDestinationComponent } from './components/new-destination/new-destination.component';
import { ToursComponent } from './components/tours/tours.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LoginComponent,
    RegisterComponent, AdminSidebarComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent,
    HomeComponent, NewDestinationComponent, ToursComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'MOGREC-VENTURES';
}
