import { EditThoughtComponent } from './components/thoughts/edit-thought/edit-thought.component';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';
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
    path: 'thoughts/editThought/:id',
    component: EditThoughtComponent,
  },
  {
    path: 'thoughts/deleteThought/:id',
    component: DeleteThoughtComponent,
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
