import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SuperPageComponent} from './super-page/super-page.component';
import {Etape2Component} from './validation/etape2.component';
import {Etape3Component} from './validation/etape3.component';

const routes: Routes = [
  {
    path: 'super-page',
    component: SuperPageComponent
  },
  {
    path: 'validation-page',
    component: Etape2Component
  },
  {
    path: 'validationNext-page',
    component: Etape3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
