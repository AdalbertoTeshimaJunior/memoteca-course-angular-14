import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listing-button',
  templateUrl: './listing-button.component.html',
  styleUrls: ['./listing-button.component.css']
})
export class ListingButtonComponent {

  @Input() hasMoreThoughts: boolean = false;

}
