import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  
  Username =" ";
  loginForm!: FormGroup;

  constructor(private authservice: AuthService, private fb:FormBuilder, private router: Router){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  login(details: { email: string; password: string }) {
    this.authservice.loginUser(details).subscribe(res =>{
      console.log(res);
      if(res.admin){
        this.router.navigate(['/admin/adminTour'])
      } else if (res.user){
        this.router.navigate(['tours'])
      }
      
    })
  }
}
