import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Register } from './register/register';
import { Preferences } from './preferences/preferences';
import { Matches } from './matches/matches';

@NgModule({
  declarations: [
    App,
    Register,
    Preferences,
    Matches
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
