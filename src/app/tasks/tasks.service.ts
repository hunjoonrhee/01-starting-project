import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../data/dummy-tasks';
import { NewTask } from '../models/task';

@Injectable({ providedIn: 'root' })
export class TasksService {
  tasks = DUMMY_TASKS;

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTask, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });
    this.saveTasks();
  }

  onDeleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    const tasks = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', tasks);
  }
}
