import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CapitalAvenueComponent } from '../component/capital-avenue/capital-avenue.component';
import { BannerComponent } from '../component/banner/banner.component';
import { ContactMeComponent } from '../component/contact-me/contact-me.component';
import { SquareProjectComponent } from '../component/square-project/square-project.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CapitalAvenueComponent, BannerComponent, ContactMeComponent, SquareProjectComponent],
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

  /*GoTo(url: string){
    this._router.navigate([url])
  }

  OpenModal(url: string){
    this._router.navigate([url])
  }*/

  email = 'lopezsebastien.pro@gmail.com';
}

// TODO :
// Refaire Organisation Portefolio
// Mot clé de l'en-tête : Identité (Nom et Prénom), Alternante, Portefolio
// Section Contact : lien LinkedIn, mail pro, github (devoir sûrement faire un github pro) et N° de tél.
// Section Projet : affiché les quatres, avec logo et résumé rapide, en lien qui amène vers les pages des projets
// Changer les couleurs
