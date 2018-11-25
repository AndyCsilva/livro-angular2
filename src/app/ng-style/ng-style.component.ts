import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  tamanho: number = 20;

  valorFonte: string = 20 + 'px';

  validaFonte: boolean = false;
  validaCor: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  incrementar(): void {
    this.tamanho ++;
    this.valorFonte = this.tamanho + 'px';
  }

  decrementar(): void {
    this.tamanho--;
    this.valorFonte = this.tamanho + 'px';
  }

  mudaFonte(): void {
    this.validaFonte = !this.validaFonte;
  }

  mudaCor(): void {
    this.validaCor = !this.validaCor;
  }

  estiloPersonalizado(): any {

    const estilo = {
      'font-size': this.validaFonte ? 'x-large' : 'smaller',
      'color': this.validaCor ? 'red' : 'blue'
    };

    return estilo;
  }

}
