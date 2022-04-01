import { Injectable } from '@angular/core';

interface Disciplina {
  nome: string;
  diaDaSemana: string;
  horario: string;
}

@Injectable()
export class DisciplinasService {
  list: Array<Disciplina> = [];
  constructor() {}

  getter() {
    return this.list;
  }

  adicionar({ nome, diaDaSemana, horario }) {
    this.list.push({ nome, diaDaSemana, horario });
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }
}
