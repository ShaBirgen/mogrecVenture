import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [NavbarComponent, RouterLink],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css',
})
export class ToursComponent {
  condition: boolean = false;

  toggleBackground(): void {
    this.condition = !this.condition;
    
  }
  
  // condition =
  //   'background-image: url(../../../assets/pexels-alessio-cesario-1906879.jpg);';
}
