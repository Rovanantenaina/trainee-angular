import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperPageComponent } from './super-page/super-page.component';
import { LazyPageComponent } from './lazy-page/lazy-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperPageComponent,
    LazyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
