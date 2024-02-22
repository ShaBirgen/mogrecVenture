import { Component } from '@angular/core';
import { ToursComponent } from '../tours/tours.component';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-new-destination',
  standalone: true,
  imports: [ToursComponent, RouterLink, FormsModule],
  templateUrl: './new-destination.component.html',
  styleUrl: './new-destination.component.css',
})
export class NewDestinationComponent {
  constructor(
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService
  ) {}

  Booking(details: any) {
    console.log(details);

    this.http
      .post<any>(' http://localhost:3000/api/book/booktour', details)
      .pipe(
        catchError((error) => {
          console.error(error); // Log the error
          // Display error toast
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Booking failed',
          });
          return throwError(error); // Rethrow the error to propagate it
        })
      )
      .subscribe((response) => {
        console.log(response); // Handle successful booking response
        if (response.success) {
          // Booking successful, redirect to login
          this.router.navigate(['/']);
          alert('Booked Successfully');
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Booked Successfully',
          }); // Display success toast
        } else {
          // Booking failed, handle error or display a message to the user
          alert('Booking unsuccessful');
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Booking failed',
          }); // Display error toast
        }
      });
  }
}
