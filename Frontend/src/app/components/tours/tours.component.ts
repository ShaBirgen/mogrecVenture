import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [NavbarComponent, RouterLink, CommonModule],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css',
})


export class ToursComponent {
  Tours: any[] = [];


  constructor(
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService
  ) {
    this.getAllTours();
  }
  getAllTours() {
    this.http
      .get<any>('http://localhost:3000/api/tours/allTours')
      .subscribe((res) => {
        this.Tours = res.tours
        console.log(res);
      });
  }
}
