import { ThoughtService } from './../thought.service';
import { Thought } from './../thought';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent {

  constructor(
    private service: ThoughtService,
    private router: Router,
    ) { }

  thought: Thought = {
    content: '',
    authorship: '',
    model: 'modelo1',
  }

  createThought() {
    this.service.createThought(this.thought).subscribe(() => {
      this.router.navigate(['/listThought'])
    });
  }
}
