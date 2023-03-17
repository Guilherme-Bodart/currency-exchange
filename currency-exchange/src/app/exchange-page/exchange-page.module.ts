import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { ExchangePageComponent } from './exchange-page.component';


@NgModule({
  declarations: [
    ExchangePageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ComponentsModule,
    RouterModule,
  ]
})
export class ExchangePageModule { }
