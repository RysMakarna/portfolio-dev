import { Component } from '@angular/core';

@Component({
  selector: 'app-project-2',
  standalone: true,
  imports: [],
  templateUrl: './project-2.component.html',
  styleUrl: './project-2.component.css'
})
export class Project2Component {
  showExtra1 = false;
  showExtra2   = false;
  slides = document.querySelectorAll('.slide2');
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

  nextSlide_2() {
    const slides = document.querySelectorAll('.slide2');
    this.currentIndex = (this.currentIndex + 1) % slides.length;
    this.updateSlider();
  }

  prevSlide_2() {
    const slides = document.querySelectorAll('.slide2');
    this.currentIndex = (this.currentIndex - 1 + slides.length) % slides.length;
    this.updateSlider();
  }

  updateSlider() {
    const slider = document.querySelector('.slider2') as HTMLElement;
    slider.style.transform = `translateX(-${this.currentIndex * 100}%)`;
  }

  ngAfterViewInit() {
    this.slides = document.querySelectorAll('.slide2');
  }
}
