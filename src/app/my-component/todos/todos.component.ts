import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddTodo, AddTodoComponent } from '../add-todo/add-todo.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

export interface Todo {
  id: number;
  title: string;
  desc: string;
  active: boolean;
}

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoListComponent, AddTodoComponent, CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent {
  todos: Todo[] = [];
  localItems: string | null = null;
  constructor() {
    this.todos = [];
    if (typeof window !== 'undefined') {
      this.localItems = localStorage.getItem('todos');
      if (this.localItems !== null) {
        this.todos = JSON.parse(this.localItems);
      }
    }
  }

  addNewTodo(todo: AddTodo) {
    this.todos.push({ ...todo, id: this.todos.length + 1, active: true });
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  deleteTodo(id: number) {
    let todoIndex = this.todos.findIndex((todo: Todo) => todo.id === id);
    if (todoIndex > -1) {
      this.todos.splice(todoIndex, 1);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
    // this.todos = this.todos.filter((item: Todo) => item.id != id);
  }

  toggleTodo(id: number) {
    let todoIndex = this.todos.findIndex((todo: Todo) => todo.id === id);
    if (todoIndex > -1) {
      this.todos[todoIndex].active = !this.todos[todoIndex].active;
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }
}
