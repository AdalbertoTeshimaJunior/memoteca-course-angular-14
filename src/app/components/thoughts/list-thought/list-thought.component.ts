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

  constructor(private service: ThoughtService) { }

  ngOnInit(): void {
    this.service.listThoughts().subscribe((listThoughts) => {
      this.listThoughts = listThoughts;
    });
  }
}
