import { Component } from '@angular/core';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css']
})
export class ListThoughtComponent {
  listThoughts = [
    {
      content: 'teste 1',
      authorship: 'Nay',
      model: 'modelo1',
    },
    {
      content: 'Teste 2',
      authorship: 'Jr',
      model: 'modelo3',
    },
    {
      content: 'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim.',
      authorship: 'rwsa',
      model: 'modelo2'
    },
  ];
}
