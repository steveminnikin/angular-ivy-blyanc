import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import {EventDetailComponent} from './event-detail/event-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {AppRoutingModule} from './app-routing/app-routing.module';


@NgModule({
  imports:      [ BrowserModule, HttpClientModule, AppRoutingModule ],
  declarations: [ AppComponent, EventsComponent, EventDetailComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
