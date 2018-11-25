import { Component, OnInit, NgModule } from '@angular/core';
import { PessoaService } from './pessoa.service';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css'],
  providers: [PessoaService]
})
export class ListaPessoaComponent implements OnInit {

  pessoas: string[];
  nome = 'Thiago';

  constructor(private pessoaService: PessoaService) {
    this.pessoas = pessoaService.getPessoas();
  }

  ngOnInit() {
  }

  listar() {
  }

  enviarNome() {
    this.pessoaService.setPessoa(this.nome);
  }
}
