import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancelAddingNewTask = new EventEmitter<boolean>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onCancelAddingNewTask() {
    this.cancelAddingNewTask.emit(false);
  }
}
