import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./views/dashboard/dashboard.component";
// 1.desaparecidos
import { DesaparecidosCrudComponent } from './views/desaparecidos-crud/desaparecidos-crud.component';
import { DesaparecidosCreateComponent } from './components/desaparecidos/desaparecidos-create/desaparecidos-create.component';
import { DesaparecidosUpdateComponent } from './components/desaparecidos/desaparecidos-update/desaparecidos-update.component';
import { DesaparecidosDeleteComponent } from './components/desaparecidos/desaparecidos-delete/desaparecidos-delete.component';
// 2.voluntarios
import { VoluntariosCrudComponent } from "./views/voluntarios-crud/voluntarios-crud.component";
import { VoluntariosCreateComponent } from "./components/voluntarios/voluntarios-create/voluntarios-create.component";
import { VoluntariosDeleteComponent } from "./components/voluntarios/voluntarios-delete/voluntarios-delete.component";
import { VoluntariosUpdateComponent } from "./components/voluntarios/voluntarios-update/voluntarios-update.component";
//3.doacoes
import { DoacaoCrudComponent } from "./views/doacao-crud/doacao-crud.component";
import { DoacoesCreateComponent } from "./components/doacoes/doacoes-create/doacoes-create.component";
import { DoacoesUpdateComponent } from "./components/doacoes/doacoes-update/doacoes-update.component";
//4.encontrados
import { EncontradosCrudComponent } from "./views/encontrados-crud/encontrados-crud.component";
import { EncontradosCreateComponent } from "./components/encontrados/encontrados-create/encontrados-create.component";
import { EncontradosDeleteComponent } from "./components/encontrados/encontrados-delete/encontrados-delete.component";
import { EncontradosUpdateComponent } from "./components/encontrados/encontrados-update/encontrados-update.component";
// 5. enderecos
import { EnderecoCrudComponent } from "./views/endereco-crud/endereco-crud.component";
import { EnderecosCreateComponent } from "./components/enderecos/enderecos-create/enderecos-create.component";
import { EnderecosDeleteComponent } from "./components/enderecos/enderecos-delete/enderecos-delete.component";
import { EnderecosUpdateComponent } from "./components/enderecos/enderecos-update/enderecos-update.component";
// 6. eventos
import { EventosCrudComponent } from "./views/eventos-crud/eventos-crud.component";
import { EventosCreateComponent } from "./components/eventos/eventos-create/eventos-create.component";
import { EventosDeleteComponent } from "./components/eventos/eventos-delete/eventos-delete.component";
import { EventosUpdateComponent } from "./components/eventos/eventos-update/eventos-update.component";
//7.mensagens
import { MensagensCrudComponent } from "./views/mensagens-crud/mensagens-crud.component";
import { MensagensDeleteComponent } from "./components/mensagens/mensagens-delete/mensagens-delete.component";
// 8.pagamentos
import { PagamentoCrudComponent } from "./views/pagamento-crud/pagamento-crud.component";
import { PagamentoCreateComponent } from "./components/pagamento/pagamento-create/pagamento-create.component";
import { PagamentoUpdateComponent } from "./components/pagamento/pagamento-update/pagamento-update.component";
// 9.parceiros
import { ParceirosCrudComponent } from "./views/parceiros-crud/parceiros-crud.component";
import { ParceirosCreateComponent } from "./components/parceiros/parceiros-create/parceiros-create.component";
import { ParceirosDeleteComponent } from "./components/parceiros/parceiros-delete/parceiros-delete.component";
import { ParceirosUpdateComponent } from "./components/parceiros/parceiros-update/parceiros-update.component";
//10.posts
import { BlogCrudComponent } from "./views/blog-crud/blog-crud.component";
import { PostsCreateComponent } from "./components/posts/posts-create/posts-create.component";
import { PostsDeleteComponent } from "./components/posts/posts-delete/posts-delete.component";
import { PostsUpdateComponent } from "./components/posts/posts-update/posts-update.component";
// 11.recompensas
import { RecompensasCrudComponent } from "./views/recompensas-crud/recompensas-crud.component";
import { RecompensasCreateComponent } from "./components/recompensas/recompensas-create/recompensas-create.component";
import { RecompensasDeleteComponent } from "./components/recompensas/recompensas-delete/recompensas-delete.component";
import { RecompensasUpdateComponent } from "./components/recompensas/recompensas-update/recompensas-update.component";
// 12.vistos
import { VistoCrudComponent } from "./views/visto-crud/visto-crud.component";
import { VistoCreateComponent } from "./components/visto/visto-create/visto-create.component";
import { VistoDeleteComponent } from "./components/visto/visto-delete/visto-delete.component";
import { VistoUpdateComponent } from "./components/visto/visto-update/visto-update.component";
// 13.acesso
import { AcessoCrudComponent } from "./views/acesso-crud/acesso-crud.component";
import { AcessoCreateComponent } from "./components/acesso/acesso-create/acesso-create.component";
import { AcessoUpdateComponent } from "./components/acesso/acesso-update/acesso-update.component";
// 14.fotos
import { FotoCrudComponent } from "./views/foto-crud/foto-crud.component";
import { FotosCreateComponent } from "./components/fotos/fotos-create/fotos-create.component";
import { FotosDeleteComponent } from "./components/fotos/fotos-delete/fotos-delete.component";
import { FotosUpdateComponent } from "./components/fotos/fotos-update/fotos-update.component";
// 15.funcionarios
import { FuncionariosCrudComponent } from "./views/funcionarios-crud/funcionarios-crud.component";
import { FuncionariosCreateComponent } from "./components/funcionarios/funcionarios-create/funcionarios-create.component";
import { FuncionariosDeleteComponent } from "./components/funcionarios/funcionarios-delete/funcionarios-delete.component";
import { FuncionariosUpdateComponent } from "./components/funcionarios/funcionarios-update/funcionarios-update.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "desaparecidos",
    component: DesaparecidosCrudComponent
  },
  {
    path: "desaparecido/cadastrar",
    component: DesaparecidosCreateComponent
  },
  {
    path: "desaparecidos/atualizar/:id",
    component: DesaparecidosUpdateComponent
  },
  {
    path: "desaparecidos/excluir/:id",
    component: DesaparecidosDeleteComponent
  },
  {
    path: "voluntario",
    component: VoluntariosCrudComponent
  },
  {
    path: "voluntario/cadastrar",
    component: VoluntariosCreateComponent
  },
  {
    path: "voluntario/atualizar/:id",
    component: VoluntariosUpdateComponent
  },
  {
    path: "voluntario/excluir/:id",
    component: VoluntariosDeleteComponent
  },

  {
    path: "funcionario",
    component: FuncionariosCrudComponent
  },
  {
    path: "funcionario/cadastrar",
    component: FuncionariosCreateComponent
  },
  {
    path: "funcionario/atualizar/:id",
    component: FuncionariosUpdateComponent
  },
  {
    path: "funcionario/excluir/:id",
    component: FuncionariosDeleteComponent
  },
  {
    path: "doacao",
    component: DoacaoCrudComponent
  },
  {
    path: "doacao/cadastrar",
    component: DoacoesCreateComponent
  },
  {
    path: "doacao/atualizar/:id",
    component: DoacoesUpdateComponent
  },
  {
    path: "encontrado",
    component: EncontradosCrudComponent
  },
  {
    path: "encontrado/cadastrar",
    component: EncontradosCreateComponent
  },
  {
    path: "encontrado/atualizar/:id",
    component: EncontradosUpdateComponent
  },
  {
    path: "encontrado/excluir/:id",
    component: EncontradosDeleteComponent
  },
  {
    path: "endereco",
    component: EnderecoCrudComponent
  },
  {
    path: "endereco/cadastrar",
    component: EnderecosCreateComponent
  },
  {
    path: "endereco/atualizar/:id",
    component: EnderecosUpdateComponent
  },
  {
    path: "endereco/excluir/:id",
    component: EnderecosDeleteComponent
  },
  {
    path: "evento",
    component: EventosCrudComponent
  },
  {
    path: "evento/cadastrar",
    component: EventosCreateComponent
  },
  {
    path: "evento/atualizar/:id",
    component: EventosUpdateComponent
  },
  {
    path: "evento/excluir/:id",
    component: EventosDeleteComponent
  },
  {
    path: "mensagem",
    component: MensagensCrudComponent
  },
  {
    path: "mensagem/excluir/:id",
    component: MensagensDeleteComponent
  },
  {
    path: "pagamento",
    component: PagamentoCrudComponent
  },
  {
    path: "pagamento/cadastrar",
    component: PagamentoCreateComponent
  },
  {
    path: "pagamento/atualizar/:id",
    component: PagamentoUpdateComponent
  },
  {
    path: "parceiro",
    component: ParceirosCrudComponent
  },
  {
    path: "parceiro/cadastrar",
    component: ParceirosCreateComponent
  },
  {
    path: "parceiro/atualizar/:id",
    component: ParceirosUpdateComponent
  },
  {
    path: "parceiro/excluir/:id",
    component: ParceirosDeleteComponent
  },
  {
    path: "blog",
    component: BlogCrudComponent
  },
  {
    path: "post/cadastrar",
    component: PostsCreateComponent
  },
  {
    path: "post/atualizar/:id",
    component: PostsUpdateComponent
  },
  {
    path: "post/excluir/:id",
    component: PostsDeleteComponent
  },
  {
    path: "recompensa",
    component: RecompensasCrudComponent
  },
  {
    path: "recompensa/cadastrar",
    component: RecompensasCreateComponent
  },
  {
    path: "recompensa/atualizar/:id",
    component: RecompensasUpdateComponent
  },
  {
    path: "recompensa/excluir/:id",
    component: RecompensasDeleteComponent
  },
  {
    path: "visto",
    component: VistoCrudComponent
  },
  {
    path: "visto/cadastrar",
    component: VistoCreateComponent
  },
  {
    path: "visto/atualizar/:id",
    component: VistoUpdateComponent
  },
  {
    path: "visto/excluir/:id",
    component: VistoDeleteComponent
  },
  {
    path: "acesso",
    component: AcessoCrudComponent
  },
  {
    path: "acesso/cadastrar",
    component: AcessoCreateComponent
  },
  {
    path: "acesso/atualizar/:id",
    component: AcessoUpdateComponent
  },
  {
    path: "foto",
    component: FotoCrudComponent
  },
  {
    path: "foto/cadastrar",
    component: FotosCreateComponent
  },
  {
    path: "foto/atualizar/:id",
    component: FotosUpdateComponent
  },
  {
    path: "foto/excluir/:id",
    component: FotosDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
