import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() eventoAutenticado = new EventEmitter();

  autenticado = false;
  form: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }


  buildForm() {
    this.form = new FormGroup({
                    usuario: new FormControl(null, Validators.required),
                    senha: new FormControl(null, Validators.required)
                    });
  }

  autenticar() {

    let objetoRetorno: any;

    if (this.form.value['usuario'] === 'admin' && this.form.value['senha'] === 'serpro') {
      this.autenticado = true;
      this.router.navigate (['/listarEscola']);

      objetoRetorno = {autenticado: true, msg: ''};
      this.eventoAutenticado.emit (objetoRetorno);
    }  else {

      objetoRetorno = {autenticado: false, msg: 'Usuário ou Senha inválida'};
      this.eventoAutenticado.emit (objetoRetorno);
    }

  }
}
