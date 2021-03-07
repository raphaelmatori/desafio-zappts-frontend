import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SignInFormComponent implements OnInit {
  emailFormControl: FormControl;
  passwordFormControl: FormControl;

  constructor() {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    
    this.passwordFormControl = new FormControl('', [
      Validators.required
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