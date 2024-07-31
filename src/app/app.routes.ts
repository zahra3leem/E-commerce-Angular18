import { Routes } from '@angular/router';
import { CardDetailsComponent } from './product-details/card-details.component';
import { CardListComponent } from './card-list/card-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './regester/regester.component';
import { Component } from '@angular/core';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  {
    path: 'product-details/:id',
    component: CardDetailsComponent,
  },

  {
    path: 'product-list',
    component: CardListComponent,
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'regester',
    component: RegisterComponent,
  },

  {
    path: 'cart',
    component : CartComponent,
  }
];
