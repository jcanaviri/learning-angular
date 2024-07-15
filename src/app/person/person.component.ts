import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Person } from '../persons/person.model';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css',
})
export class PersonComponent {
  @Input() person: Person;
  @Input() i: number;
}
