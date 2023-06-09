import { Component } from '@angular/core';

@Component({
  selector: 'app-trajetoria-profissional',
  templateUrl: './trajetoria-profissional.component.html',
  styleUrls: ['./trajetoria-profissional.component.css']
})
export class TrajetoriaProfissionalComponent {

  competencias_backend: string[] = ["Spring Framework", "PostgreSQL", "Hibernate", "JPA", ];

  competencias_frontend: string[] = ["JavaScript", "AngularJS", "Bootstrap v5", "Datatable", "ChartJS", "HTML5", "CSS3", ];

  competencias_construcao_de_software: string[] = ["UML", "Engenharia de Software", "Astah" ];

  competencias_adicionais: string[] = ["Microsoft Office", "Robótica", ];


}
