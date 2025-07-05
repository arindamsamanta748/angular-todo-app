import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo, TodosComponent } from '../todos/todos.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodosComponent, NgClass],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  @Input() todo!: Todo;
  @Output() onClickDel: EventEmitter<number> = new EventEmitter();
  @Output() onClickToggle: EventEmitter<number> = new EventEmitter();

  constructor() {}
  onClick(id: number) {
    this.onClickDel.emit(id);
  }
  toggleTodo(id: number) {
    this.onClickToggle.emit(id);
  }
}
