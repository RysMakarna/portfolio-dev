import { Component } from '@angular/core';

@Component({
  selector: 'app-project-1',
  standalone: true,
  imports: [],
  templateUrl: './project-1.component.html',
  styleUrl: './project-1.component.css'
})
export class Project1Component {

  showExtra1 = false;
  showExtra2   = false;
  slides = document.querySelectorAll('.slide');
  ngOnInit(){
    console.log('Good');
  }

  ngOnDestroy(){
    console.log('Dead');
  }

  toggleDiv1() {
    this.showExtra1 = !this.showExtra1;
  }

  toggleDiv2() {
    this.showExtra2 = !this.showExtra2;
  }

  currentIndex = 0;

  nextSlide() {
    const slides = document.querySelectorAll('.slide');
    this.currentIndex = (this.currentIndex + 1) % slides.length;
    this.updateSlider();
  }

  prevSlide() {
    const slides = document.querySelectorAll('.slide');
    this.currentIndex = (this.currentIndex - 1 + slides.length) % slides.length;
    this.updateSlider();
  }

  updateSlider() {
    const slider = document.querySelector('.slider') as HTMLElement;
    slider.style.transform = `translateX(-${this.currentIndex * 100}%)`;
  }

  ngAfterViewInit() {
    this.slides = document.querySelectorAll('.slide');
  }
}
