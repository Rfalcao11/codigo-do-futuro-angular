import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import ptBr from '@angular/common/locales/pt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './paginas/home/home.component';
import { FormatarCpfPipe } from './pipes/formatar-cpf.pipe';
import { FormatarTelefonePipe } from './pipes/formatar-telefone.pipe';
import { RouteReuseStrategy } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './paginas/form/form.component';
import { ContactListComponent } from './paginas/contact-list/contact-list.component';
import { ClientesNotificacaoComponent } from './componentes/clientes-notificacao/clientes-notificacao.component';
import { PortfolioComponent } from './paginas/portfolio/portfolio.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { NaoEncontradaComponent } from './paginas/nao-encontrada/nao-encontrada.component';



registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormatarTelefonePipe,
    FormatarCpfPipe,
    FormComponent,
    ContactListComponent,
    ClientesNotificacaoComponent,
    PortfolioComponent,
    SobreComponent,
    NaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt'},
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',

    },
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
