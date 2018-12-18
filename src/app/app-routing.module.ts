import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarEscolaComponent } from 'src/app/editar-escola/editar-escola.component';
import { ListarEscolaComponent } from 'src/app/listar-escola/listar-escola.component';
import { DetalharEscolaComponent } from 'src/app/detalhar-escola/detalhar-escola.component';
import { IncluirEscolaComponent } from 'src/app/incluir-escola/incluir-escola.component';
import { LoginComponent } from 'src/app/login/login.component';
import { AppComponent } from 'src/app/app.component';

const routes: Routes = [
  {path:'editarEscola/:id',component: EditarEscolaComponent},
  {path:'detalharEscola/:id',component: DetalharEscolaComponent},
  {path:'listarEscola',component: ListarEscolaComponent},
  {path:'listarEscola/:minhaMsg',component: ListarEscolaComponent},
  {path:'incluirEscola',component: IncluirEscolaComponent},
  {path:'login',component: LoginComponent},
  {path:'',redirectTo: '/login',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
