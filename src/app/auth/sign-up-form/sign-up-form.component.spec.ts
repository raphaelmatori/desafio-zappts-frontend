import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpFormComponent } from './sign-up-form.component';
import { SocialAuthService } from "angularx-social-login";
import { SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SignUpFormComponent', () => {
  let component: SignUpFormComponent;
  let fixture: ComponentFixture<SignUpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpFormComponent],
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
    fixture = TestBed.createComponent(SignUpFormComponent);
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

  it('should have a sign up button', () => {
    let button = fixture.debugElement.query(By.css('button[type="submit"].sign-button')).nativeElement;
    expect(button).toBeTruthy();
  });

  it('should have a sign up with google button', () => {
    let button = fixture.debugElement.query(By.css('button.google-button')).nativeElement;
    expect(button).toBeTruthy();
  });

  it('should have a link to "Terms of Conditions"', () => {
    let anchor = fixture.debugElement.query(By.css('a.js-termsOfConditions')).nativeElement;
    expect(anchor).toBeTruthy();
  });

  it('should have a link to go to "Privacy Policy"', () => {
    let anchor = fixture.debugElement.query(By.css('a.js-privacyPolicy')).nativeElement;
    expect(anchor).toBeTruthy();
  });

  it('should have a link to go to login page', () => {
    let anchor = fixture.debugElement.query(By.css('a.js-login')).nativeElement;
    expect(anchor).toBeTruthy();
  });

});
