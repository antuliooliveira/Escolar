import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EscolaService } from 'src/app/shared/services/escola.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Escola } from 'src/app/shared/model/escola';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-incluir-escola',
  templateUrl: './incluir-escola.component.html',
  styleUrls: ['./incluir-escola.component.css']
})
export class IncluirEscolaComponent implements OnInit {
  
  private form: FormGroup;

  constructor(private escolaService:EscolaService,
    private route: ActivatedRoute,
    private router: Router) { } 


  ngOnInit() {
    this.buildForm(new Escola());
  }

  buildForm(escola: Escola) {
    this.form = new FormGroup({
                    nome: new FormControl(escola.nome,Validators.required),
                    matriculados: new FormControl(escola.matriculados,Validators.required),
                    professores:  new FormControl(escola.professores,Validators.required), 
                    labinformatica: new FormControl(escola.labinformatica,Validators.required)
                    });
  }

  onIncluir (){
    const escola = new Escola (0,this.form.value['nome'],+this.form.value['matriculados'],+this.form.value['professores'], this.form.value['labinformatica']);
    this.escolaService.
            incluir(escola).subscribe(value => {
                if (value.status == 200){
                  console.log ("Incluído com sucesso...");
                  this.router.navigate (['/listarEscola','Escola incluída com sucesso']);
                } else {
                  console.log ("Erro!! "+value.status);
                }
            },
            error => {
              alert('Erro do servidor durante a consulta de cursos!');
            });
    
  }


}
