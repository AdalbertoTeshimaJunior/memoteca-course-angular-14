import { lowerCaseValidator } from 'src/app/validators/lowerCase.validator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  thoughtForm!: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchByd(parseInt(id!)).subscribe((thought) => {
      this.thoughtForm = this.formBuilder.group({
        id: [thought.id],
        content: [thought.content, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ])],
        authorship: [thought.authorship, Validators.compose([
          Validators.required,
          Validators.minLength(3),
          lowerCaseValidator
        ])],
        model: [thought.model],
      });
    });
  }

  editThought() {
    this.service.editThought(this.thoughtForm.value).subscribe(() => {
      this.router.navigate(['listThought']);
    });
  }

  enableButton(): string {
    if (this.thoughtForm.valid)
      return 'botao'
    else
      return 'disabled_button'
  }
}
