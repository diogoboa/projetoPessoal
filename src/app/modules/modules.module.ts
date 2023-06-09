
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { LightboxModule } from 'ngx-lightbox';



import { SobreMimComponent } from './sobre-mim/sobre-mim.component';
import { TrajetoriaProfissionalComponent } from './trajetoria-profissional/trajetoria-profissional.component';
import { TrajetoriaAcademicaComponent } from './trajetoria-academica/trajetoria-academica.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { InformacoesEContatoComponent } from './informacoes-e-contato/informacoes-e-contato.component';





@NgModule({
  declarations: [
    SobreMimComponent,
    TrajetoriaProfissionalComponent,
    TrajetoriaAcademicaComponent,
    ProjetosComponent,
    InformacoesEContatoComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LightboxModule

  ],
  exports: [
    SobreMimComponent,
    TrajetoriaProfissionalComponent
  ]
})
export class ModulesModule { }
