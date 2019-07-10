import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SuperPageComponent} from './super-page/super-page.component';
import {ValidationComponent} from './validation/validation.component';
import {ValidationService} from './service/validation.service';
import {FormsModule} from '@angular/forms';
import {ValidationNextComponent} from './validation/validationNext.component';
import {RecapComponent} from './super-page/recap.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperPageComponent,
    ValidationComponent,
    ValidationNextComponent,
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
