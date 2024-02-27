import { Component } from '@angular/core';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { Router, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/tours.servicee';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [AdminSidebarComponent, RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  constructor(
    private tourservice: AuthService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService
  ) {}

  
//  deleteTour(details:{ tourId: string}){
//   return this.http.delete<{success: string, error: string}>(`http://localhost:3000/api/tours/deleteTour/${tourId}`)
//   .subscribe((res) =>{
//     this.Tours = res.tours
//     console.log(res);
    
//   });
    
//   }
 }

 

