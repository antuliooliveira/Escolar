import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarEscolaComponent } from './listar-escola/listar-escola.component';
import { EditarEscolaComponent } from './editar-escola/editar-escola.component';
import { DetalharEscolaComponent } from './detalhar-escola/detalhar-escola.component';
import { LoginComponent } from './login/login.component';
import { IncluirEscolaComponent } from './incluir-escola/incluir-escola.component';
import { SimNaoPipe } from './shared/sim-nao.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListarEscolaComponent,
    EditarEscolaComponent,
    DetalharEscolaComponent,
    LoginComponent,
    IncluirEscolaComponent,
    SimNaoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
