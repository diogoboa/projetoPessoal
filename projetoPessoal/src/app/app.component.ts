import { Component } from '@angular/core';

import { SweetAlert2Component } from './shared/sweet-alert2/sweet-alert2.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


constructor(private sweetAlert: SweetAlert2Component) { }

  deleteItem() {

    this.sweetAlert.yesNoQuestion('titulo', 'texto').then((escolha) =>{

      if(escolha.isConfirmed)
      {
        console.log('sim');
      }

    });

  }





}
