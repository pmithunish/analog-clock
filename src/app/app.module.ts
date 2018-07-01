import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutingModule } from './app-routing.module';

import {
  MatButtonModule,
  MatCardModule,
  MatIconModule
} from '@angular/material';
import { ClockComponent } from './clock/clock.component';

const Components = [AppComponent, HomeComponent, PageNotFoundComponent, ClockComponent];

const MaterialModules = [MatButtonModule, MatCardModule, MatIconModule];

@NgModule({
  declarations: Components,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ...MaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
