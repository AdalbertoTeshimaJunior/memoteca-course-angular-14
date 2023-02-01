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

  constructor(private service: ThoughtService) { }

  ngOnInit(): void {
    this.service.listThoughts(this.currentPage, this.filter).subscribe((listThoughts) => {
      this.listThoughts = listThoughts;
    });
  }

  loadMoreThoughts() {
    this.service.listThoughts(++this.currentPage, this.filter)
      .subscribe((listThoughts) => {
        this.listThoughts.push(...listThoughts);
        if (!listThoughts.length) {
          this.hasMoreThoughts = false;
        }
      });
  }

  researchThoughts() {
    this.hasMoreThoughts = true;
    this.currentPage = 1;
    this.service.listThoughts(this.currentPage, this.filter)
      .subscribe((listThoughts) => {
        this.listThoughts = listThoughts;
      });
  }
}
