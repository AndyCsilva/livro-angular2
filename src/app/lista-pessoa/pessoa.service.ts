import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  nomePessoas: string[] = ['João', 'Maria', 'Angular	2', 'Thiago'];

  constructor() { }

  getPessoas(): string[] {
    return this.nomePessoas;
  }

  setPessoa(nome: string): void {
    this.nomePessoas.push(nome);
  }
}
