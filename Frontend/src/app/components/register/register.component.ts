import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { catchError, throwError } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NavbarComponent, HomeComponent, LoginComponent, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService
  ) {}

  registerUser(details: any) {
 
    console.log(details);
    

    this.http
      .post<any>('http://localhost:3000/api/auth/register', details)
      .pipe(
        catchError((error) => {
          console.error(error); // Log the error
          // Display error toast
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Registration failed',
          });
          return throwError(error); // Rethrow the error to propagate it
        })
      )
      .subscribe((response) => {
        console.log(response); // Handle successful registration response
        if (response.success) {
          // Registration successful, redirect to login
          this.router.navigate(['/']);
          alert('Registered Successfully');
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'User registered successfully',
          }); // Display success toast
        } else {
          // Registration failed, handle error or display a message to the user
          alert('Registration unsuccessful');
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Registration failed',
          }); // Display error toast
        }
      });
  }
}
