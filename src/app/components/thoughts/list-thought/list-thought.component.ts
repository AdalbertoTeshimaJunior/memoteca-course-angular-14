import { Router } from '@angular/router';
import { ThoughtService } from './../thought.service';
import { Thoughts } from './../thought';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css']
})
export class ListThoughtComponent implements OnInit {
  listThoughts: Thoughts = [];
  currentPage: number = 1;
  hasMoreThoughts: boolean = true;
  filter: string = '';
  favorite: boolean = false;
  favoriteList: Thoughts = [];
  title: string = 'Meu Mural';

  constructor(
    private service: ThoughtService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.service.listThoughts(this.currentPage, this.filter, this.favorite).subscribe((listThoughts) => {
      this.listThoughts = listThoughts;
    });
  }

  loadMoreThoughts() {
    this.service.listThoughts(++this.currentPage, this.filter, this.favorite)
      .subscribe((listThoughts) => {
        this.listThoughts.push(...listThoughts);
        if (!listThoughts.length) {
          this.hasMoreThoughts = false;
        }
      });
  }

  researchThoughts() {
    this.currentPage = 1;
    this.hasMoreThoughts = true;
    this.service.listThoughts(this.currentPage, this.filter, this.favorite)
      .subscribe((listThoughts) => {
        this.listThoughts = listThoughts;
        if (this.favorite)
          this.favoriteList = listThoughts;
      }
    );
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url])
  }

  listFavorites() {
    this.title = 'Meus Favoritos';
    this.favorite = true;
    this.researchThoughts();
  }
}
