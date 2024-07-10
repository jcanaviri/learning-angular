import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { Person } from './persons/person.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonsComponent, CalculatorComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Listing Persons';
  inputFirstName = '';
  inputLastName = '';

  people: Person[] = [
    new Person('John', 'Smith'),
    new Person('Susan', 'Anniston'),
  ];

  addPerson() {
    if (this.inputFirstName === '' && this.inputLastName === '') return;
    const newPerson = new Person(this.inputFirstName, this.inputLastName);

    this.people.push(newPerson);
  }
}
