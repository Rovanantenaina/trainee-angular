import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperPageComponent } from './super-page/super-page.component';
import { LazyPageComponent } from './lazy-page/lazy-page.component';
import {RecapComponent} from './recap/recap.component';
import {CounterService} from './service/counter.service';
import {CounterResolver} from './service/counter.resolver';

@NgModule({
  declarations: [
    AppComponent,
    SuperPageComponent,
    LazyPageComponent,
    RecapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
