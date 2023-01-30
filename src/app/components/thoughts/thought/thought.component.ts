import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent {

  @Input() thought = {
    content: 'I love Angular',
    authorship: 'Nay',
    model: 'modelo3',
  }

  widthThought(): string {
    if(this.thought.content.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
