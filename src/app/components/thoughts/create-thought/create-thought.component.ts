import { Component } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent {

  thought = {
    thoughtId: '1',
    content: 'Aprendendo Angular',
    authorship: 'Dev',
    model: 'model2',
  }

  createThought() {
    alert("New thought saved!");
  }

  cancel() {
    alert("Thought canceled!");
  }

}
