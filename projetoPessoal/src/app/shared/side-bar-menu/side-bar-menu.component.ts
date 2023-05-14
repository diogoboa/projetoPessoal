import { Component } from '@angular/core';

import { SweetAlert2Component } from '../sweet-alert2/sweet-alert2.component';

@Component({
  selector: 'app-side-bar-menu',
  templateUrl: './side-bar-menu.component.html',
  styleUrls: ['./side-bar-menu.component.css']
})
export class SideBarMenuComponent {

  constructor(private sweetAlert2: SweetAlert2Component) {}

  btn_academico()
  {
    this.sweetAlert2.yesNoQuestion('ok', 'ok');
  }


}
