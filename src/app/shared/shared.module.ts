import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModulesModule } from '../modules/modules.module';

import { SweetAlert2Component } from './sweet-alert2/sweet-alert2.component';
import { SideBarMenuComponent } from './side-bar-menu/side-bar-menu.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    //SweetAlert2Component,
    SideBarMenuComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    ModulesModule,
    RouterModule
  ],
  exports: [
    ModulesModule,
    //SweetAlert2Component,
    SideBarMenuComponent,
    FooterComponent
  ],
  providers: [
    SweetAlert2Component
  ]
})
export class SharedModule { }
