import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Project1Component } from '../component/project-1/project-1.component';
import { Project2Component } from "../component/project-2/project-2.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Project1Component, Project2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  _router = inject(Router);
  ngOnInit(){
    console.log('Good');
  }

  ngOnDestroy(){
    console.log('Dead');
  }
}
