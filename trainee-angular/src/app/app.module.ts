import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SuperPageComponent} from './super-page/super-page.component';
import {Etape2Component} from './validation/etape2.component';
import {ValidationService} from './service/validation.service';
import {FormsModule} from '@angular/forms';
import {Etape3Component} from './validation/etape3.component';
import {RecapComponent} from './super-page/recap.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperPageComponent,
    Etape2Component,
    Etape3Component,
    RecapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
