import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../data/dummy-tasks';
import { User } from '../models/user';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() selectedUser?: User;
  tasks = DUMMY_TASKS;

  get tasksByUser() {
    return this.tasks.filter((task) => task.userId === this.selectedUser?.id);
  }

  onDeleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
