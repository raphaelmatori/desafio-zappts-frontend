import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInFormComponent } from './sign-in-form.component';
import { SocialAuthService } from "angularx-social-login";
import { SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { By } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SignInFormComponent', () => {
  let component: SignInFormComponent;
  let fixture: ComponentFixture<SignInFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInFormComponent],
      imports: [BrowserAnimationsModule, MatInputModule, FormsModule, ReactiveFormsModule],
      providers: [SocialAuthService, {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider(
                'thisShouldBeMocked'
              )
            }
          ]
        } as SocialAuthServiceConfig,
      }],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an Email input', () => {
    let input = fixture.debugElement.query(By.css('input[type="email"]')).nativeElement;
    expect(input).toBeTruthy();
  });

  it('should have a Password input', () => {
    let input = fixture.debugElement.query(By.css('input[type="password"]')).nativeElement;
    expect(input).toBeTruthy();
  });

  it('should have a sign in button', () => {
    let button = fixture.debugElement.query(By.css('button[type="submit"].signIn-button')).nativeElement;
    expect(button).toBeTruthy();
  });

  it('should have a sign in with google button', () => {
    let button = fixture.debugElement.query(By.css('button.google-button')).nativeElement;
    expect(button).toBeTruthy();
  });

  it('should have a link to create account', () => {
    let anchor = fixture.debugElement.query(By.css('a.createAccount')).nativeElement;
    expect(anchor).toBeTruthy();
  });

  it('should have a link to reset password', () => {
    let anchor = fixture.debugElement.query(By.css('a.js-forgotPassword')).nativeElement;
    expect(anchor).toBeTruthy();
  });
});
