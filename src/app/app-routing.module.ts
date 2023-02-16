import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'todo-container', component: TodoContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
