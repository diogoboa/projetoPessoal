import { Component } from '@angular/core';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-sweet-alert2',
  template: '<p>Componente SweetAlert2</p>'
})
export class SweetAlert2Component {



  yesNoQuestion2(titulo: string, texto: string) {

    return Swal.fire({
      title: titulo,
      text: texto,
      icon: 'question',
      showCancelButton: false,
      confirmButtonText: 'OK',
    });


  }











}
