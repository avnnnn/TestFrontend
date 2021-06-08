import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NevermindComponent } from './nevermind/nevermind.component';
import { ShowComponent } from './nevermind/show/show.component';
import { AddEditComponent } from './nevermind/add-edit/add-edit.component';


import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NevermindComponent,
    ShowComponent,
    AddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
