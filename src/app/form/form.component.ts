import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Person } from '../persons/person.model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  inputFirstName = '';
  inputLastName = '';

  @Output() person = new EventEmitter<Person>();

  addPerson() {
    if (this.inputFirstName === '' && this.inputLastName === '')
      return;

    this.person.emit(new Person(this.inputFirstName, this.inputLastName));
    this.inputFirstName = '';
    this.inputLastName = '';
  }
}
