import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { ExchangePageComponent } from './exchange-page/exchange-page.component';
import { ExchangePageModule } from './exchange-page/exchange-page.module';

const routes: Routes = [
  {
    path: '',
    component: ExchangePageComponent,
  }

];

@NgModule({
  declarations: [AppComponent,],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    CommonModule,
    ComponentsModule,
    ExchangePageModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
