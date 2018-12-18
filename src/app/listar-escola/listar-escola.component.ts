import { Component, OnInit } from '@angular/core';
import { Escola } from 'src/app/shared/model/escola';
import { EscolaService } from 'src/app/shared/services/escola.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-listar-escola',
  templateUrl: './listar-escola.component.html',
  styleUrls: ['./listar-escola.component.css']
})
export class ListarEscolaComponent implements OnInit {

  escolas: Escola[];
  mensagem = '';

  constructor(private escolaService: EscolaService,
              private route: ActivatedRoute,
              private router: Router) {
    this.escolas = [];
  }

  ngOnInit() {
    this.escolaService.listar().
    subscribe(value => {
      this.escolas = value;
    },
      error => {

        // Itera nas propriedades de um Objeto.
        for (const key in error) {
          if (error.hasOwnProperty(key)) {
            console.log ('Propriedade: ' + key + ' Valor:' + error[key]);
          }
        }

        alert ('Erro de Comunicação com o Servidor:' + error['message']);
      }
    );

    this.route.params.subscribe(params => {
                            this.mensagem = params['minhaMsg'];
                          });

  }

  onExcluir (id: number) {
    console.log ('Id impresso: ' + id);

    this.escolaService.remover(id).subscribe(value => {
          if (value.status === 200) {
            this.escolas = this.escolas.filter (e => e.id !== id);
            this.mensagem = 'Escola excluída com sucesso';
          } else {
            console.log ('Erro!! ' + value.status);
          }
      },
      error => {
        alert('Erro do servidor durante a consulta de cursos!');
    });
  }

}
