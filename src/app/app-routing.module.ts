import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { DesaparecidosCrudComponent } from './views/desaparecidos-crud/desaparecidos-crud.component';
import { DesaparecidosCreateComponent } from './components/desaparecidos/desaparecidos-create/desaparecidos-create.component';
import { DesaparecidosUpdateComponent } from './components/desaparecidos/desaparecidos-update/desaparecidos-update.component';
import { DesaparecidosDeleteComponent } from './components/desaparecidos/desaparecidos-delete/desaparecidos-delete.component';
import { VoluntariosCrudComponent } from "./views/voluntarios-crud/voluntarios-crud.component";
import { VoluntariosCreateComponent } from "./components/voluntarios/voluntarios-create/voluntarios-create.component";
import { VoluntariosDeleteComponent } from "./components/voluntarios/voluntarios-delete/voluntarios-delete.component";
import { VoluntariosUpdateComponent } from "./components/voluntarios/voluntarios-update/voluntarios-update.component";
import { FuncionariosCrudComponent } from "./views/funcionarios-crud/funcionarios-crud.component";

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
    path: "desaparecidos/excluir/:id",
    component: DesaparecidosDeleteComponent
  },

  {
    path: "funcionarios",
    component: FuncionariosCrudComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
