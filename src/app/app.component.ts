import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetoFinal2';

  autenticado: boolean;
  msg: string;

  constructor() {
    this.msg = '';
  }

  onAutenticar(dados: any) {
    // Não estou usando nada do resultado
    console.log (dados.autenticado);
    this.autenticado = dados.autenticado;
    this.msg = dados.msg;
  }

  logout() {
    this.autenticado = false;
    this.msg = '';
  }

}
