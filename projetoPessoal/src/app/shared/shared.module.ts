import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SweetAlert2Component } from './sweet-alert2/sweet-alert2.component';
import { SideBarMenuComponent } from './side-bar-menu/side-bar-menu.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    SweetAlert2Component,
    SideBarMenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    SweetAlert2Component,
    SideBarMenuComponent,
    FooterComponent
  ],
  providers: [
    SweetAlert2Component
  ]
})
export class SharedModule { }
