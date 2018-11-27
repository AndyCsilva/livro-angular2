import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  habilitarBotao: boolean = false;
  valores: string [] = [];
  idade: number = 0;

  constructor() { }

  ngOnInit() {
  }

  meuClick(): void {
    console.log('fui clicado');
  }

  digitou($event): void {
    console.log($event);
  }

  digitouVarTemplate(variavel: string): void {
    console.log(variavel);
  }

  validaSenha(senha: string): void {
    console.log(senha);
    this.habilitarBotao = senha.length > 4 ? true : false;
  }

  gravarSenha(senha): void {
    alert('senha gravada com sucesso! Sua senha é: ' + senha);
  }

  adicionar(valor:	string): void {
    this.valores.push(valor);
  }

  verIdade(valor): void {
    let ano = new Date();
    this.idade = ano.getFullYear() - valor;
  }
}
