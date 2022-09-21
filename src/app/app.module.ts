import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatCardModule } from  '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MatButtonModule } from  '@angular/material/button';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { HttpClientModule } from  '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RedDirective } from './directives/red.directive';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from  '@angular/common';
import { ForDirective } from './directives/for.directive';
import { DesaparecidosCreateComponent } from './components/desaparecidos/desaparecidos-create/desaparecidos-create.component';
import { DesaparecidosDeleteComponent } from './components/desaparecidos/desaparecidos-delete/desaparecidos-delete.component';
import { DesaparecidosReadComponent } from './components/desaparecidos/desaparecidos-read/desaparecidos-read.component';
import { DesaparecidosUpdateComponent } from './components/desaparecidos/desaparecidos-update/desaparecidos-update.component';
import { VoluntariosUpdateComponent } from './components/voluntarios/voluntarios-update/voluntarios-update.component';
import { VoluntariosDeleteComponent } from './components/voluntarios/voluntarios-delete/voluntarios-delete.component';
import { VoluntariosReadComponent } from './components/voluntarios/voluntarios-read/voluntarios-read.component';
import { VoluntariosCreateComponent } from './components/voluntarios/voluntarios-create/voluntarios-create.component';
import { EventosCreateComponent } from './components/eventos/eventos-create/eventos-create.component';
import { EventosReadComponent } from './components/eventos/eventos-read/eventos-read.component';
import { EventosDeleteComponent } from './components/eventos/eventos-delete/eventos-delete.component';
import { EventosUpdateComponent } from './components/eventos/eventos-update/eventos-update.component';
import { RecompensasUpdateComponent } from './components/recompensas/recompensas-update/recompensas-update.component';
import { RecompensasDeleteComponent } from './components/recompensas/recompensas-delete/recompensas-delete.component';
import { RecompensasCreateComponent } from './components/recompensas/recompensas-create/recompensas-create.component';
import { RecompensasReadComponent } from './components/recompensas/recompensas-read/recompensas-read.component';
import { EnderecosReadComponent } from './components/enderecos/enderecos-read/enderecos-read.component';
import { EnderecosCreateComponent } from './components/enderecos/enderecos-create/enderecos-create.component';
import { EnderecosDeleteComponent } from './components/enderecos/enderecos-delete/enderecos-delete.component';
import { EnderecosUpdateComponent } from './components/enderecos/enderecos-update/enderecos-update.component';
import { PostsUpdateComponent } from './components/posts/posts-update/posts-update.component';
import { PostsCreateComponent } from './components/posts/posts-create/posts-create.component';
import { PostsDeleteComponent } from './components/posts/posts-delete/posts-delete.component';
import { PostsReadComponent } from './components/posts/posts-read/posts-read.component';
import { EncontradosReadComponent } from './components/encontrados/encontrados-read/encontrados-read.component';
import { EncontradosUpdateComponent } from './components/encontrados/encontrados-update/encontrados-update.component';
import { EncontradosCreateComponent } from './components/encontrados/encontrados-create/encontrados-create.component';
import { EncontradosDeleteComponent } from './components/encontrados/encontrados-delete/encontrados-delete.component';
import { DoacoesUpdateComponent } from './components/doacoes/doacoes-update/doacoes-update.component';
import { DoacoesCreateComponent } from './components/doacoes/doacoes-create/doacoes-create.component';
import { DoacoesReadComponent } from './components/doacoes/doacoes-read/doacoes-read.component';
import { MensagensReadComponent } from './components/mensagens/mensagens-read/mensagens-read.component';
import { MensagensDeleteComponent } from './components/mensagens/mensagens-delete/mensagens-delete.component';
import { VistoDeleteComponent } from './components/visto/visto-delete/visto-delete.component';
import { VistoUpdateComponent } from './components/visto/visto-update/visto-update.component';
import { VistoCreateComponent } from './components/visto/visto-create/visto-create.component';
import { VistoReadComponent } from './components/visto/visto-read/visto-read.component';
import { AcessoReadComponent } from './components/acesso/acesso-read/acesso-read.component';
import { AcessoUpdateComponent } from './components/acesso/acesso-update/acesso-update.component';
import { AcessoCreateComponent } from './components/acesso/acesso-create/acesso-create.component';
import { FotosCreateComponent } from './components/fotos/fotos-create/fotos-create.component';
import { FotosDeleteComponent } from './components/fotos/fotos-delete/fotos-delete.component';
import { FotosReadComponent } from './components/fotos/fotos-read/fotos-read.component';
import { FotosUpdateComponent } from './components/fotos/fotos-update/fotos-update.component';
import { PagamentoUpdateComponent } from './components/pagamento/pagamento-update/pagamento-update.component';
import { PagamentoCreateComponent } from './components/pagamento/pagamento-create/pagamento-create.component';
import { PagamentoReadComponent } from './components/pagamento/pagamento-read/pagamento-read.component';
import { PagamentoCrudComponent } from './views/pagamento-crud/pagamento-crud.component';
import { VistoCrudComponent } from './views/visto-crud/visto-crud.component';
import { AcessoCrudComponent } from './views/acesso-crud/acesso-crud.component';
import { FotoCrudComponent } from './views/foto-crud/foto-crud.component';
import { EnderecoCrudComponent } from './views/endereco-crud/endereco-crud.component';
import { ParceirosCrudComponent } from './views/parceiros-crud/parceiros-crud.component';
import { RecompensasCrudComponent } from './views/recompensas-crud/recompensas-crud.component';
import { EventosCrudComponent } from './views/eventos-crud/eventos-crud.component';
import { MensagensCrudComponent } from './views/mensagens-crud/mensagens-crud.component';
import { DoacaoCrudComponent } from './views/doacao-crud/doacao-crud.component';
import { BlogCrudComponent } from './views/blog-crud/blog-crud.component';
import { EncontradosCrudComponent } from './views/encontrados-crud/encontrados-crud.component';
import { FuncionariosCrudComponent } from './views/funcionarios-crud/funcionarios-crud.component';
import { VoluntariosCrudComponent } from './views/voluntarios-crud/voluntarios-crud.component';
import { DesaparecidosCrudComponent } from './views/desaparecidos-crud/desaparecidos-crud.component';
import { ParceirosCreateComponent } from './components/parceiros/parceiros-create/parceiros-create.component';
import { ParceirosDeleteComponent } from './components/parceiros/parceiros-delete/parceiros-delete.component';
import { ParceirosReadComponent } from './components/parceiros/parceiros-read/parceiros-read.component';
import { ParceirosUpdateComponent } from './components/parceiros/parceiros-update/parceiros-update.component';
import { FuncionariosUpdateComponent } from './components/funcionarios/funcionarios-update/funcionarios-update.component';
import { FuncionariosCreateComponent } from './components/funcionarios/funcionarios-create/funcionarios-create.component';
import { FuncionariosDeleteComponent } from './components/funcionarios/funcionarios-delete/funcionarios-delete.component';
import { FuncionariosReadComponent } from './components/funcionarios/funcionarios-read/funcionarios-read.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    DashboardComponent,
    RedDirective,
    ForDirective,
    DesaparecidosCreateComponent,
    DesaparecidosDeleteComponent,
    DesaparecidosReadComponent,
    DesaparecidosUpdateComponent,
    VoluntariosUpdateComponent,
    VoluntariosDeleteComponent,
    VoluntariosReadComponent,
    VoluntariosCreateComponent,
    EventosCreateComponent,
    EventosReadComponent,
    EventosDeleteComponent,
    EventosUpdateComponent,
    RecompensasUpdateComponent,
    RecompensasDeleteComponent,
    RecompensasCreateComponent,
    RecompensasReadComponent,
    EnderecosReadComponent,
    EnderecosCreateComponent,
    EnderecosDeleteComponent,
    EnderecosUpdateComponent,
    PostsUpdateComponent,
    PostsCreateComponent,
    PostsDeleteComponent,
    PostsReadComponent,
    EncontradosReadComponent,
    EncontradosUpdateComponent,
    EncontradosCreateComponent,
    EncontradosDeleteComponent,
    DoacoesUpdateComponent,
    DoacoesCreateComponent,
    DoacoesReadComponent,
    MensagensReadComponent,
    MensagensDeleteComponent,
    VistoDeleteComponent,
    VistoUpdateComponent,
    VistoCreateComponent,
    VistoReadComponent,
    AcessoReadComponent,
    AcessoUpdateComponent,
    AcessoCreateComponent,
    FotosCreateComponent,
    FotosDeleteComponent,
    FotosReadComponent,
    FotosUpdateComponent,
    PagamentoUpdateComponent,
    PagamentoCreateComponent,
    PagamentoReadComponent,
    PagamentoCrudComponent,
    VistoCrudComponent,
    AcessoCrudComponent,
    FotoCrudComponent,
    EnderecoCrudComponent,
    ParceirosCrudComponent,
    RecompensasCrudComponent,
    EventosCrudComponent,
    MensagensCrudComponent,
    DoacaoCrudComponent,
    BlogCrudComponent,
    EncontradosCrudComponent,
    FuncionariosCrudComponent,
    VoluntariosCrudComponent,
    DesaparecidosCrudComponent,
    ParceirosCreateComponent,
    ParceirosDeleteComponent,
    ParceirosReadComponent,
    ParceirosUpdateComponent,
    FuncionariosUpdateComponent,
    FuncionariosCreateComponent,
    FuncionariosDeleteComponent,
    FuncionariosReadComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule 
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR',
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
