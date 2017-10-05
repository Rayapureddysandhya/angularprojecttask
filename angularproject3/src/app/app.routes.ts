import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
export const router:Routes=[
{path:'',redirectTo:'body',pathMatch:"full"},
{path:'',component:BodyComponent},
{path:'services',component:ServicesComponent},
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent}
];
export const routes:ModuleWithProviders=RouterModule.forRoot(router);