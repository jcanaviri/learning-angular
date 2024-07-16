import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { PersonComponent } from './person/person.component';
import { Person } from './persons/person.model';
import { PersonsComponent } from './persons/persons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PersonsComponent,
    CalculatorComponent,
    FormsModule,
    CommonModule,
    PersonComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Listing Persons';
  inputFirstName = '';
  inputLastName = '';

  people: Person[] = [];

  addPerson() {
    if (this.inputFirstName === '' && this.inputLastName === '') return;
    const newPerson = new Person(this.inputFirstName, this.inputLastName);

    this.people.push(newPerson);
    this.inputFirstName = '';
    this.inputLastName = '';
  }
}
