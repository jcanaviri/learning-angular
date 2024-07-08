import { Component } from '@angular/core';
import { PersonComponent } from '../person/person.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-persons',
  standalone: true,
  imports: [PersonComponent, FormsModule],
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent {
  isDisabled = false;
  message = 'Not found';
  counter = 1;
  degree = '';

  addPerson() {
    this.message = `(${this.counter++}) Person`;
  }

  changeDegree(event: Event) {
    this.degree = (<HTMLInputElement>event.target).value;
  }
}
