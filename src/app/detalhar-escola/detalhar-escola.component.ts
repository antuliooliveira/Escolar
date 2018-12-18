import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EscolaService } from 'src/app/shared/services/escola.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Escola } from 'src/app/shared/model/escola';

@Component({
  selector: 'app-detalhar-escola',
  templateUrl: './detalhar-escola.component.html',
  styleUrls: ['./detalhar-escola.component.css']
})
export class DetalharEscolaComponent implements OnInit {

  private id: string;
  private inscricao: Subscription;
  private escola: Escola;
    
  constructor(private escolaService:EscolaService,
    private route: ActivatedRoute,
    private router: Router) { 
      this.escola = new Escola();
    }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(params => {
                      this.id = params['id'];
                      this.escolaService.buscar (this.id).subscribe(value => {
                        this.escola = value;
                      },
                      error => {
                        alert('Erro do servidor durante a consulta de cursos!');
                      });
                    });    
  }

}
