import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ToursComponent } from './components/tours/tours.component';
import { NewDestinationComponent } from './components/new-destination/new-destination.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { WildcardComponent } from './components/wildcard/wildcard.component';
import { ToursAdminComponent } from './components/tours-admin/tours-admin.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tours', component: ToursComponent },
  { path: 'newDestination', component: NewDestinationComponent },
  { path: 'admin', component: AdminComponent, children: [
    { path: 'adminTour', component:ToursAdminComponent},
  ] },
  { path: 'admin-sidebar', component: AdminSidebarComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'footer', component: FooterComponent },
  { path: '**', component: WildcardComponent },
];
