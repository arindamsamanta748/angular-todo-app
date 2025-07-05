import { Component } from '@angular/core';
import { TodosComponent } from '../../my-component/todos/todos.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodosComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {}
