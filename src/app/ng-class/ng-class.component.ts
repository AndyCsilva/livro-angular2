import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  valorClassBinding: boolean;

  constructor() { }

  ngOnInit() {
  }

  mudarClassBinding(): void {
    this.valorClassBinding = !this.valorClassBinding;
  }

  classes(): any {
    const valores = {
      'cor-fundo': this.valorClassBinding,
      'cor-letra': this.valorClassBinding,
      'estilo-letra': this.valorClassBinding,
      'borda-paragrafo': this.valorClassBinding
    };

    return valores;
  }

}