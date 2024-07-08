import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css',
})
export class PersonComponent {
  firstName = 'Charlie';
  lastName = 'Brown';
  private age = 10;

  getAge(): number {
    return this.age;
  }
}
