import { Component } from '@angular/core';

@Component({
  //NEED to add moduleId with any component that will handle data, if not, err won't be clear
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title: 'Freelance bootcamp dash';
}
