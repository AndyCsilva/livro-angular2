import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  mostraNome: boolean;
  curso: string;
  cursos: string [] = [];

  constructor() { }

  ngOnInit() {
  }

  getValor(): boolean {
    return this.mostraNome;
  }

  mostrarNome(): void {
    this.mostraNome = !this.mostraNome;
  }

  addCurso(): void {
    this.cursos.push(this.curso);
    this.curso = '';
  }

}
