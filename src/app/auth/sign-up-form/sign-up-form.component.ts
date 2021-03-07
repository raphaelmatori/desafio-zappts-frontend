import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from "angularx-social-login";

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
  user: SocialUser | undefined;
  @ViewChild("password") passwordField: ElementRef | undefined;

  constructor(private authService: SocialAuthService) {
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
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.emailFormControl.setValue(this.user.email);
      this.fullNameFormControl.setValue(this.user.name);
      this.passwordField ? this.passwordField.nativeElement.focus() : null;
      //TODO: Before using users info as Signin-up, check if user is already registred with this e-mail
      //If so, just log them in
      //Otherwise, use its info to fill the form
    });
  }

  signUpWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }


}

export class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}