import { Component } from '@angular/core';
import { UserTableComponent } from '../../my-component/user-table/user-table.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
