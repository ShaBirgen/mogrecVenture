import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterLink],
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
    console.log('Clicked');
    this.currentIndex = (this.currentIndex - 1 + slides.length) % slides.length;
    this.showSlide(this.currentIndex);
  }

  nextSlide() {
    const slides = document.querySelectorAll('.slide');
    this.currentIndex = (this.currentIndex + 1) % slides.length;
    this.showSlide(this.currentIndex);
  }

  // GALLERY
  // Index = 0;

  // Slider(index: number) {
  //   const slides = document.querySelectorAll('.slides');
  //   slides.forEach((slides, i) => {
  //     if (i === index) {
  //       slides.setAttribute('data-active', '');
  //     } else {
  //       slides.removeAttribute('data-active');
  //     }
  //   });
  // }

  // backSlide() {
  //   this.Index = (this.Index - 1 + 3) % 3; // 3 is the total number of slides
  //   this.Slider(this.Index);
  // }

  // forwardSlide() {
  //   this.Index = (this.Index + 1) % 3; // 3 is the total number of slides
  //   this.Slider(this.Index);
  // }
}
