import { ListThoughtComponent } from './components/thoughts/list-thought/list-thought.component';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listThought',
    pathMatch: 'full',
  },
  {
    path: 'createThought',
    component: CreateThoughtComponent,
  },
  {
    path: 'listThought',
    component: ListThoughtComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
