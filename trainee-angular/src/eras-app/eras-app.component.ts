import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="header pull-center">
        <h1>Welcome to {{ title }}!</h1>
      </div>

      <div class="menu">
        <h4>TOP Links : </h4>
        <ul>
          <li><a href="javascript:void 0">Link 1</a></li>
          <li><a href="javascript:void 0">Link 2</a></li>
          <li><a href="javascript:void 0">Link 3</a></li>
          <li><a href="javascript:void 0">Link 4</a></li>
        </ul>
      </div>

      <div class="content">
        <router-outlet></router-outlet>
      </div>
      <div class="footer pull-center">
        <span>ERAS | Corporation ©</span>
      </div>
    </div>
  `,
  styleUrls: ['./eras-app.component.css']
})
export class ErasAppComponent {
  title = 'trainee-angular';
}
