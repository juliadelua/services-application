import { Component, OnInit } from '@angular/core';
import { DisciplinasService } from '../disciplinas.service';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css'],
})
export class DisciplinasComponent implements OnInit {
  nome: string;
  diaDaSemana: string;
  horario: string;

  constructor(public disc: DisciplinasService) {}

  ngOnInit() {}

  criar() {
    this.disc.adicionar({
      nome: this.nome,
      diaDaSemana: this.diaDaSemana,
      horario: this.horario,
    });
  }
}
