import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square-project',
  standalone: true,
  imports: [],
  templateUrl: './square-project.component.html',
  styleUrl: './square-project.component.css'
})
export class SquareProjectComponent {

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.cdr.detectChanges()
  }

  project = [{
    image: '/assets/images/Capture3.png',
    title: 'Lingua Bellum',
    description:'Jeu de Batailles de Rimes',
    descriptionL: 'Simple jeu de batailles de rimes.\nIl y a des modes de jeu en plus en lien avec les syllabes.',
    github: 'https://github.com/SebastienJLOPEZ/Lingua-Bellum'
  },
  {
    image: '/assets/images/logo2.png',
    title: 'Tu Zik?',
    description:"Site pour musiciens et chanteur",
    descriptionL: 'Site pour musiciens et chanteur.\nLes utilisateurs peuvent vendre leurs équipements ou communiquer entre eux.',
    github: 'https://github.com/SebastienJLOPEZ/Capital-Avenue'
  },
  {
    image: 'assets/images/logo4.png',
    title: 'Capital Avenue',
    description:'Jeu de société inspiré de Monopoly',
    descriptionL: 'Jeu de société inspiré de Monopoly.\nCe jeu fonctionnait avec WinForm.',
    github: 'https://github.com/SebastienJLOPEZ/EssenceLink-Back'
  },
  {
    image: 'assets/images/logo1.png',
    title: 'EssenceLink',
    description:"Site d'E-commerce de produit végétaux",
    descriptionL: "Site d'E-commerce de produit végétaux.\nCe projet contenait un back et un front, en C# .Net et VueJS respectivement.\nLe front doit posséder une partie client et une partie admin.",
    github: 'https://github.com/SebastienJLOPEZ/EssenceLink-Front'
  },
  {
    image: 'assets/images/logo5.png',
    title: 'Mon Portfolio',
    description: 'Ce portfolio fut réaliser entièrement sous Angular.',
    descriptionL: "Ce portfolio fut entièrement réalisé sous Angular, sans l'utilisation de templates",
    github: ''
  }
  ];

  currentProject: any;

  openModal(item: any, dialog: HTMLDialogElement){
    this.currentProject = item;
    dialog.showModal();
  }

  onImageLoad() {
    console.log('Image loaded successfully');
  }

  onImageError() {
    console.error('Image failed to load');
  }
}
