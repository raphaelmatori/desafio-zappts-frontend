import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SignUpFormComponent implements OnInit {
  fullNameFormControl: FormControl;
  emailFormControl: FormControl;
  passwordFormControl: FormControl;

  constructor() {
    this.fullNameFormControl = new FormControl('', [
      Validators.required
    ]);

    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    
    this.passwordFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]);  
  }
  
  matcher = new CustomErrorStateMatcher();

  ngOnInit(): void {
  }

}

export class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}