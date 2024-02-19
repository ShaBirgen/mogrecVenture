import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  currentIndex = 0;

  showSlide(index: number) {
    const slides = document.querySelectorAll('.slide');
    console.log('This is slides');

    slides.forEach((slide, i) => {
      if (i === index) {
        slide.setAttribute('data-active', '');
      } else {
        slide.removeAttribute('data-active');
      }
    });
  }

  prevSlide() {
    const slides = document.querySelectorAll('.slide');
    this.currentIndex = (this.currentIndex - 1 + slides.length) % slides.length;
    this.showSlide(this.currentIndex);
    console.log('Clicked');
  }

  nextSlide() {
    const slides = document.querySelectorAll('.slide');
    this.currentIndex = (this.currentIndex + 1) % slides.length;
    this.showSlide(this.currentIndex);
  }
}
