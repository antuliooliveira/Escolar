import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators /*, AbstractControl, ValidationErrors*/ } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EscolaService } from 'src/app/shared/services/escola.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Escola } from 'src/app/shared/model/escola';


@Component({
  selector: 'app-editar-escola',
  templateUrl: './editar-escola.component.html',
  styleUrls: ['./editar-escola.component.css']
})
export class EditarEscolaComponent implements OnInit {

  private id: string;
  private inscricao: Subscription;
  private escola: Escola;
  form: FormGroup;

  constructor(private escolaService:EscolaService,
    private route: ActivatedRoute,
    private router: Router) { } 


  ngOnInit() {
    this.buildForm(new Escola());
    this.inscricao = this.route.params.subscribe(params => {
                                                    this.id = params['id'];
                                                    this.escolaService.buscar (this.id).subscribe(value => {
                                                      this.buildForm (value);
                                                    },
                                                    error => {
                                                      alert('Erro do servidor durante a consulta de cursos!');
                                                    });
                                                  });    
  }

  buildForm(escola: Escola) {
    this.form = new FormGroup({
                    nome: new FormControl(escola.nome,Validators.required),
                    matriculados: new FormControl(escola.matriculados,Validators.required),
                    professores:  new FormControl(escola.professores,Validators.required), 
                    labinformatica: new FormControl(escola.labinformatica,Validators.required)
                    });
  }

  onGravar () {
    const escola = new Escola (+this.id,this.form.value['nome'],+this.form.value['matriculados'],+this.form.value['professores'], this.form.value['labinformatica']);

    this.escolaService.
            gravar(escola).subscribe(value => {
                if (value.status === 200){
                  this.router.navigate (['/listarEscola','Escola alterada com sucesso']);
                } else {
                  console.log ("Erro!! "+value.status);
                }
            },
            error => {
              alert('Erro do servidor durante a consulta de cursos!');
            });
  }

}
