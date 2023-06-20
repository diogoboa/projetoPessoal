import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SobreMimComponent } from './modules/sobre-mim/sobre-mim.component';
import { TrajetoriaProfissionalComponent } from './modules/trajetoria-profissional/trajetoria-profissional.component';
import { TrajetoriaAcademicaComponent } from './modules/trajetoria-academica/trajetoria-academica.component';
import { ProjetosComponent } from './modules/projetos/projetos.component';
import { InformacoesEContatoComponent } from './modules/informacoes-e-contato/informacoes-e-contato.component';



const routes: Routes = [
  { path: '', redirectTo: 'sobre-mim', pathMatch: 'full' },
  { path: 'sobre-mim', component: SobreMimComponent },
  { path: 'trajetoria-profissional', component: TrajetoriaProfissionalComponent },
  { path: 'trajetoria-academica', component: TrajetoriaAcademicaComponent },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'informacoes-e-contato', component: InformacoesEContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
