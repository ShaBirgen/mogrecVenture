import { Component } from '@angular/core';
import { ToursComponent } from '../tours/tours.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-destination',
  standalone: true,
  imports: [ToursComponent, RouterLink],
  templateUrl: './new-destination.component.html',
  styleUrl: './new-destination.component.css'
})
export class NewDestinationComponent {

}
