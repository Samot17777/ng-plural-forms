import {Component} from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
    languages = ['English', 'Spanish', 'Other'];
    model = new Employee('', '', false, '', 'default');
    hasPrimaryLanguageError = false;
    validatePrimaryLanguage(value) {
      if(value === 'default') {
        this.hasPrimaryLanguageError = true;
      } else {
        this.hasPrimaryLanguageError = false;
      }
    } 
}
