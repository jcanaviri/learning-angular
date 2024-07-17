import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  numberOne: number;
  numberTwo: number;
  @Output() result = new EventEmitter<number>();

  add() {
    const toResult = this.numberOne + this.numberTwo;
    this.result.emit(toResult);

    this.numberOne = 0;
    this.numberTwo = 0;
  }
}
