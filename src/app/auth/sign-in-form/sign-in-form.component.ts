import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SignInFormComponent implements OnInit {
  emailFormControl: FormControl;
  passwordFormControl: FormControl;
  user: SocialUser | undefined;
  loggedIn: boolean | undefined;

  constructor(private authService: SocialAuthService) {
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
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      //TODO: After user were logged-in, get local info about themselves.
      //This should be moved to a LoginService though.
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

}

export class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}