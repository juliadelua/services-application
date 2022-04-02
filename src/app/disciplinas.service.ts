import { Injectable } from '@angular/core';

interface Disciplina {
  nome: string;
  diaDaSemana: string;
  horario: string;
}

@Injectable()
export class DisciplinasService {
  list: Array<Disciplina> = [];
  constructor() {
    this.list = [
      {
        nome: 'Projeto de Encontrabilidade',
        diaDaSemana: 'Segunda',
        horario: '19:00 - 22:30',
      },
      {
        nome: 'Negócios e Marketing e Eletrônicos',
        diaDaSemana: 'Quarta',
        horario: '19:00 - 22:30',
      },
      {
        nome: 'Desenvolvimento para Servidores II',
        diaDaSemana: 'Quinta',
        horario: '19:00 - 22:30',
      },
      {
        nome: '	Tópicos Especiais em Sistemas para Internet II',
        diaDaSemana: 'Sexta',
        horario: '19:00 - 22:30',
      },
      {
        nome: 'Projeto de Prototipagem e Testes de Usabilidade',
        diaDaSemana: 'Sábado',
        horario: '8:00 - 11:30',
      },
    ];
  }

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
