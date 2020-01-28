import { NgBrazil } from 'ng-brazil';
import { TextMask } from 'ng-brazil';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { AuthGuard } from './services/app.guard';
import { CustomFormsModule } from 'ng2-validation';
import { CadastroGuard } from './services/cadastro.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { FileSizePipe } from './demos/pipes/filmes/filesize.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { TestesComponent } from './demos/testes/testes.component';
import { CitacaoComponent } from './demos/citacao/citacao.component';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe,
    TestesComponent,
    CitacaoComponent
  ],
  imports: [
    NgBrazil,
    FormsModule,
    BrowserModule,
    NavegacaoModule,
    CustomFormsModule,
    ReactiveFormsModule,
    TextMask.TextMaskModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    CadastroGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }