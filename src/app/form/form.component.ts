import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOption, MatSelect} from "@angular/material/select";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';

import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIcon} from "@angular/material/icon";


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelect, MatOption, MatFormFieldModule, MatInputModule, MatDatepickerModule, ReactiveFormsModule, MatIcon],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  providers: [provideNativeDateAdapter()],

})
export class FormComponent {
  fullName = new FormControl('', Validators.required);
  identificationNumber = new FormControl('', Validators.required);
  phoneNumber = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  placeOfBirth = new FormControl('', Validators.required);
  dateOfBirth = new FormControl('', Validators.required);
  nationality = new FormControl('', Validators.required);
  religion = new FormControl('', Validators.required);
  gender = new FormControl('', Validators.required);
  maritalStatus = new FormControl('', Validators.required);
  address = new FormControl('', Validators.required);

  getErrorMessage(inputName: string) {
    switch(inputName) {
      case 'email':
        if (this.email.hasError('required')) {
          return 'Harus diisi';
        }
        return this.email.hasError('email') ? 'Email tidak valid' : '';
      case 'fullName':
        if (this.fullName.hasError('required')) {
          return 'Harus diisi';
        }
        return '';
      case 'identificationNumber':
        if (this.identificationNumber.hasError('required')) {
          return 'Harus diisi';
        }
        return '';
      case 'phoneNumber':
        if (this.phoneNumber.hasError('required')) {
          return 'Harus diisi';
        }
        return '';
      case 'dateOfBirth':
        if (this.dateOfBirth.hasError('required')) {
          return 'Harus diisi';
        }
        return '';
      case 'placeOfBirth':
        if (this.placeOfBirth.hasError('required')) {
          return 'Harus diisi';
        }
        return '';
      case 'nationality':
        if (this.nationality.hasError('required')) {
          return 'Harus diisi';
        }
        return '';
      case 'religion':
        if (this.religion.hasError('required')) {
          return 'Harus diisi';
        }
        return '';
      case 'gender':
        if (this.gender.hasError('required')) {
          return 'Harus diisi';
        }
        return '';
      case 'maritalStatus':
        if (this.maritalStatus.hasError('required')) {
          return 'Harus diisi';
        }
        return '';
      case 'address':
        if (this.address.hasError('required')) {
          return 'Harus diisi';
        }
        return '';
      default:
        return '';
    }
  }
}
