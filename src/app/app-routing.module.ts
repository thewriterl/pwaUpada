import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {SimuladorComponent} from "./simulador/simulador.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'simulador',
    component: SimuladorComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
