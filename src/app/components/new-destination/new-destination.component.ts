import { Component } from '@angular/core';
import { ToursComponent } from '../tours/tours.component';

@Component({
  selector: 'app-new-destination',
  standalone: true,
  imports: [ToursComponent],
  templateUrl: './new-destination.component.html',
  styleUrl: './new-destination.component.css'
})
export class NewDestinationComponent {

}
