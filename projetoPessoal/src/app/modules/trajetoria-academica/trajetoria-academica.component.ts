import { Component } from '@angular/core';

@Component({
  selector: 'app-trajetoria-academica',
  templateUrl: './trajetoria-academica.component.html',
  styleUrls: ['./trajetoria-academica.component.css']
})
export class TrajetoriaAcademicaComponent {


  disciplina_nivel_superior: string[] = ["Introdução à Sistemas Digitais", "Algoritmos e Programação I", "Arquitetura de Computadores I", "Engenharia de Software", "Segurança e Auditoria de Sistemas", "Computação e Sociedade", "Fundamentos de Tecnologia da Informação"];

  disciplina_nivel_tecnico: string[] = ["Desenvolvimento de Trabalho de Conclusão de Curso", "Programação WEB III", "Qualidade e Teste de Software", "Banco de Dados", "Desenvolvimento para Dispositivos Móveis I", "Gestão de Conteúdo Web I", "Interfaces WEB II", "Sistemas Web I", "Interfaces WEB 2", "Usabilidade e Design de Interação", "Usabilidade e Design de Interação", "Gestão de Conteúdo Web I", "Pré TCC", "Desenvolvimento de Sistemas", "Design Digital", "Sistemas Embarcados", "Segurança de Sistemas de Informação", "Aplicativos Informatizados"];




}
