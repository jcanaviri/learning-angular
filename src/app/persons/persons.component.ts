import { Component } from '@angular/core';
import { PersonComponent } from '../person/person.component';

@Component({
  selector: 'app-persons',
  standalone: true,
  imports: [PersonComponent],
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent {}
