import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, } from '@angular/router'

import { AppComponent } from './app.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { LoginComponent } from './components/pages/login/login.component';
import { InputComponent } from './components/general/input/input.component';
import { ButtonComponent } from './components/general/button/button.component';
import { BoxOneComponent } from './components/general/box-one/box-one.component';
import { HeadingComponent } from './components/general/heading/heading.component';
import { HomeComponent } from './components/pages/home/home.component';
import { authGuard } from './guards/auth.guard';
import { loggedInGuard } from './guards/logged-in.guard';
import { ButtonTwoComponent } from './components/general/button-two/button-two.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { SearchComponent } from './components/general/search/search.component';
import { BookDetailsComponent } from './components/pages/book-details/book-details.component';
import { HeaderComponent } from './components/fragments/header/header.component';
import { CardComponent } from './components/general/card/card.component';
import { LoadingComponent } from './components/general/loading/loading.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartComponent } from './components/pages/cart/cart.component';
import { CartCardComponent } from './components/general/cart-card/cart-card.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [authGuard] },
  {path: 'login', component: LoginComponent, canActivate: [loggedInGuard] },
  {path: 'signup', component: SignupComponent, canActivate: [loggedInGuard] },
  {path: 'book-details/:id', component: BookDetailsComponent, canActivate: [authGuard]},
  {path: 'cart', component: CartComponent, canActivate: [authGuard]},
  {path: '**', component: HomeComponent, canActivate: [authGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    InputComponent,
    ButtonComponent,
    BoxOneComponent,
    HeadingComponent,
    HomeComponent,
    ButtonTwoComponent,
    SearchComponent,
    BookDetailsComponent,
    HeaderComponent,
    CardComponent,
    LoadingComponent,
    CartComponent,
    CartCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}, CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
