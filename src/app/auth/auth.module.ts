import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from './auth.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AuthComponent,
    SignInFormComponent,
    SignUpFormComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ]
})
export class AuthModule {}
