import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css'],
})
export class DisciplinasComponent implements OnInit {
  nome: string;
  diaDaSemana: string;
  horario: string;

  constructor() {}

  ngOnInit() {}
}
