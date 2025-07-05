import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface AddTodo {
  title: string;
  desc: string;
}

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss',
})
export class AddTodoComponent {
  title: string = '';
  desc: string = '';
  @Output() addTodo: EventEmitter<AddTodo> = new EventEmitter();

  onSubmit() {
    if (this.title == '' || this.desc == '') {
      return;
    }
    this.addTodo.emit({ title: this.title, desc: this.desc });
    this.title = '';
    this.desc = '';
  }
}
