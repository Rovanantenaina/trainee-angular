import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SuperPageComponent} from './super-page/super-page.component';
import {ValidationComponent} from './validation/validation.component';
import {ValidationNextComponent} from './validation/validationNext.component';

const routes: Routes = [
  {
    path: 'super-page',
    component: SuperPageComponent
  },
  {
    path: 'validation-page',
    component: ValidationComponent
  },
  {
    path: 'validationNext-page',
    component: ValidationNextComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
