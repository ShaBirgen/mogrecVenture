import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [NavbarComponent, RouterLink],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css',
})


export class ToursComponent {
  
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService
    ) {
      interface Tours{
        tour_id: string;
        Destination: string,
        Tour_type: string,
        Duration: string,
        Price: string,
        Image: string,
      }
    }
    myTours:Tours[]=[]
    getAllTours(){
      interface Tour{
        Tour: Tour[]
      }
      
  
    
      this.http.get<Tour>('http://localhost:3000/api/tours/allTours')
      .subscribe((response) => {
        console.log(response.Tour); // Handle successful registration response
     
      });
  }
}


