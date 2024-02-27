import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tours-admin',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tours-admin.component.html',
  styleUrl: './tours-admin.component.css',
})
export class ToursAdminComponent {
  Tours: any[] = [];

  constructor(private http: HttpClient) {
    this.getAllTours();
  }

  getAllTours() {
    this.http
      .get<any>('http://localhost:3000/api/tours/allTours')
      .subscribe((res) => {
        this.Tours = res.tours;
        console.log( res);
      });
  }

  deleteTour(tourId: string) {
    this.http
      .delete<any>(`http://localhost:3000/api/tours/deleteTour/${tourId}`)
      .subscribe((res) => {
        this.getAllTours()
        this.Tours = res.tours;
        console.log('This is create' + res);
      });
  }
}
