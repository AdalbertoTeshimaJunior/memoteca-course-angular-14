import { ThoughtService } from './../thought.service';
import { Thought } from './../thought';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  constructor(
    private service: ThoughtService,
    private router: Router,
    private formBuilder: FormBuilder,
    ) { }

  thoughtForm!: FormGroup;

  ngOnInit(): void {
    this.thoughtForm = this.formBuilder.group({
      content: ['Formulário reativo'],
      authorship: [''],
      model: ['modelo1'],
    })
  }

  createThought() {
    this.service.createThought(this.thoughtForm.value).subscribe(() => {
      this.router.navigate(['/listThought'])
    });
  }
}
