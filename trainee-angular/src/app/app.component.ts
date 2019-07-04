import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trainee-angular';


  constructor(private router: Router) {
  }

  goToSuperPage = () => {
    this.router.navigate(['super-page']);
  }

  goToLazyPage = () => {
    this.router.navigate(['lazy-page']);
  }
}
