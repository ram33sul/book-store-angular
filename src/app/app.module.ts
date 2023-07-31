import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, } from '@angular/router'

import { AppComponent } from './app.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { LoginComponent } from './components/pages/login/login.component';
import { InputComponent } from './components/general/input/input.component';
import { ButtonComponent } from './components/general/button/button.component';
import { BoxOneComponent } from './components/general/box-one/box-one.component';
import { HeadingComponent } from './components/general/heading/heading.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    InputComponent,
    ButtonComponent,
    BoxOneComponent,
    HeadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
