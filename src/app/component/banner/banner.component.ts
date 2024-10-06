import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})

export class BannerComponent {

  items = [
    {
      image: '',
      title: '  Javascript',
      description: 'Ceci est la description du premier item.'
    },
    {
      image: '',
      title: 'PHP',
      description: 'Ceci est la description du deuxième item.'
    },
    {
      image: '',
      title: 'MySQL',
      description: 'Ceci est la description du troisième item.'
    },
    {
      image: 'favicon.ico',
      title: 'Angular',
      description: 'Ceci est la description du troisième item.'
    },
    {
      image: '',
      title: 'VueJS',
      description: 'Ceci est la description du troisième item.'
    }
  ];

  visibleItems: { image: string; title: string; description: string; }[] = [];

  // Index actuel des items
  currentIndex = 0;

  // Nombre d'items à afficher à chaque fois (par paire)
  itemsToLoad = 2;

  constructor() {
    // Affiche les premiers éléments au démarrage
    this.loadMore();
  }

  // Fonction pour charger et remplacer les éléments visibles
  loadMore() {
    // Calcule le nouvel index de départ pour charger les prochains items
    const nextIndex = this.currentIndex + this.itemsToLoad;

    // Gérer le cas impair: si on est à la fin et qu'il reste un seul élément,
    // on affiche l'avant-dernier avec le dernier
    if (nextIndex >= this.items.length && this.items.length % 2 !== 0) {
      this.visibleItems = this.items.slice(this.items.length - 2); // Montre les deux derniers
    } else {
      // Charge deux éléments à partir du nouvel index
      this.visibleItems = this.items.slice(this.currentIndex, nextIndex);
    }
    console.log(this.visibleItems)
    // Met à jour l'index courant pour la prochaine paire
    this.currentIndex = nextIndex;
    console.log(this.items.length)
  }

  loadLess() {
    const prevIndex = this.currentIndex - this.itemsToLoad;

    if(prevIndex <= 2){
      this.visibleItems = this.items.slice(0, this.itemsToLoad);
      this.currentIndex = this.itemsToLoad;
    } else {
      console.log(this.items.length)
      if (this.currentIndex > this.items.length){
        this.currentIndex -= 2;
      }
      console.log(this.currentIndex)
      this.visibleItems = this.items.slice(prevIndex - this.itemsToLoad, this.currentIndex );
      this.currentIndex = prevIndex
    }
    console.log(this.visibleItems)
    console.log(prevIndex)
    console.log("itemsToLoad :", this.itemsToLoad)

  }
}
