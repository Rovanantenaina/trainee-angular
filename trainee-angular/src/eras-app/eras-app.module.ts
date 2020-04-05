import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {ErasAppRoutingModule} from './eras-app-routing.module';
import {ErasAppComponent} from './eras-app.component';

@NgModule({
  declarations: [
    ErasAppComponent
  ],
  imports: [
    BrowserModule,
    ErasAppRoutingModule
  ],
  providers: [],
  bootstrap: [ErasAppComponent]
})
export class ErasAppModule {
}
