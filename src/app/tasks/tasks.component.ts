import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../data/dummy-tasks';
import { User } from '../models/user';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask, Task } from '../models/task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) selectedUser!: User;
  isAddingTask = false;
  tasks = DUMMY_TASKS;

  get tasksByUser() {
    return this.tasks.filter((task) => task.userId === this.selectedUser?.id);
  }

  onDeleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  openNewTaskDialog() {
    this.isAddingTask = true;
  }

  onCancel(canceled: boolean) {
    this.isAddingTask = canceled;
  }

  addNewTask(newTask: NewTask) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.selectedUser.id,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate,
    });
    this.isAddingTask = false;
  }
}
