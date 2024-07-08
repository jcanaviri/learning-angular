import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  title = 'Calculator App';
  first = 0;
  second = 0;
  result = 0;

  getResult(): void {
    this.result = this.first + this.second;
  }
}
