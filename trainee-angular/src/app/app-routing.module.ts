import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LazyPageComponent} from './lazy-page/lazy-page.component';
import {SuperPageComponent} from './super-page/super-page.component';
import {RecapComponent} from './recap/recap.component';
import {CounterService} from './service/counter.service';
import {CounterResolver} from './service/counter.resolver';

const routes: Routes = [
  {
    path: 'super-page',
    component: SuperPageComponent
  },
  {
    path: 'recap-page',
    component: RecapComponent,
      resolve: {
      count: CounterResolver,
      count2: CounterResolver
    }
  },
  {
    path: 'lazy-page',
    component: LazyPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CounterResolver]
})
export class AppRoutingModule {
}
