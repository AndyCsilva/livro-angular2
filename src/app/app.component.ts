import { AlertaService } from './alerta.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Livro Angular 2';
  foto: string = 'favicon.ico';
  desenvolvimento: string[] = ['Angular 2', 'JavaScript', 'TypeScript',	'HTML',	'CSS'];
  valor: string;

  constructor(private alertaService: AlertaService) {

  }

  enviarMsg(): void {
    this.alertaService.msgAlerta();
  }

  seuFilhoQuerFalar(valorPassado): void {
    console.log('seu filho está dizendo: %o', valorPassado);
    this.valor = valorPassado;
  }
}
