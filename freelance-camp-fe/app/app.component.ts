import { Component } from '@angular/core';

@Component({
  //NEED to add moduleId with any component that will handle data, if not, err won't be clear
  moduleId: module.id,
  selector: 'app',
  template: `

  <h1>Navigation</h1>

  <router-outlet></router-outlet>

  `
})

export class AppComponent {
  title: 'Freelance bootcamp dash';
}
