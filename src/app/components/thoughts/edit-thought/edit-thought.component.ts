import { Router, ActivatedRoute } from '@angular/router';
import { ThoughtService } from './../thought.service';
import { Thought } from './../thought';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css']
})
export class EditThoughtComponent implements OnInit {

  thought: Thought = {
    id: 0,
    content: '',
    authorship: '',
    model: '',
  }

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchByd(parseInt(id!)).subscribe((thought) => {
      this.thought = thought;
    });
  }

  editThought() {
    this.service.editThought(this.thought).subscribe(() => {
      this.router.navigate(['listThought']);
    });
  }
}
