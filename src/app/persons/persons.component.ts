import { Component } from '@angular/core';
import { PersonComponent } from '../person/person.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-persons',
  standalone: true,
  imports: [PersonComponent, FormsModule, CommonModule],
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent {
  isDisabled = false;
  message = 'Not found';
  counter = 1;
  degree = '';
  show = false;

  addPerson() {
    if (this.degree === '') return;
    this.show = true;
    this.message = `(${this.counter++}) Person with the title of ${this.degree}`;
  }

  changeDegree(event: Event) {
    this.degree = (<HTMLInputElement>event.target).value;
  }
}
