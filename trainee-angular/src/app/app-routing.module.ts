import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LazyPageComponent} from './lazy-page/lazy-page.component';
import {SuperPageComponent} from './super-page/super-page.component';

const routes: Routes = [
  {
    path: 'super-page',
    component: SuperPageComponent
  },
  {
    path: 'lazy-page',
    component: LazyPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
