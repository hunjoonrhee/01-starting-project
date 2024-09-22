import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancelAddingNewTask = new EventEmitter<boolean>();

  onCancelAddingNewTask() {
    this.cancelAddingNewTask.emit(false);
  }
}
