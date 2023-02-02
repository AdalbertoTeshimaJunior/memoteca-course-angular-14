import { ThoughtService } from './../thought.service';
import { Thought, Thoughts } from './../thought';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent {

  @Input() thought: Thought = {
    id: 0,
    content: '',
    authorship: '',
    model: '',
    favorite: false,
  }

  @Input() favoriteList: Thoughts = [];

  constructor(private service: ThoughtService) { }

  widthThought(): string {
    if(this.thought.content.length >= 256)
      return 'pensamento-g'
    return 'pensamento-p'
  }

  updateFavoriteIcon(): string {
    if (this.thought.favorite == false)
      return 'inativo';
    return 'ativo';
  }

  changeFavorite() {
    this.service.changeFavorite(this.thought).subscribe(() => {
      this.favoriteList.splice(
        this.favoriteList.indexOf(this.thought), 1
      );
    });
  }
}
