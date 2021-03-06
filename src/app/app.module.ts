import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInFormComponent } from './sign-in/sign-in-form/sign-in-form.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpFormComponent } from './sign-up/sign-up-form/sign-up-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    SignInComponent,
    SignUpComponent,
    SignInFormComponent,
    SignUpFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
