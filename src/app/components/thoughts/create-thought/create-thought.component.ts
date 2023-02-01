import { ThoughtService } from './../thought.service';
import { Thought } from './../thought';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/validators/lowerCase.validator';

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
      content: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
      ])],
      authorship: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        lowerCaseValidator
      ])],
      model: ['modelo1'],
    })
  }

  createThought() {
    if (this.thoughtForm.valid) {
      this.service.createThought(this.thoughtForm.value).subscribe(() => {
        this.router.navigate(['/listThought'])
      });
    }
  }

  enableButton(): string {
    if (this.thoughtForm.valid)
      return 'botao'
    else
      return 'disabled_button'
  }
}
