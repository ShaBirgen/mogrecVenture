import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-create-tour',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './create-tour.component.html',
  styleUrl: './create-tour.component.css',
})
export class CreateTourComponent {
  constructor(
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService
  ) {}

  createTour(details: any) {
    console.log(details);

    this.http
      .post<any>('http://localhost:3000/api/tours/createTour', details)
      .pipe(
        catchError((error) => {
          console.error(error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Tour not created',
          });
          return throwError(error);
        })
      )
      .subscribe((response: any) => {
        console.log(response); // Handle successful booking response
        if (response.success) {
          // Booking successful, redirect to login
          this.router.navigate(['/']);
          alert('Tour created Successfully');
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Created Successfully',
          }); // Display success toast
        } else {
          // Booking failed, handle error or display a message to the user
          alert('Tour not created');
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Tour not created',
          }); // Display error toast
        }
      });
  }
}
