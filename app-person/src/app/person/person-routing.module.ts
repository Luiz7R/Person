import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { createComponent } from '@angular/compiler/src/core';

const routes: Routes = [
  { path: 'person', redirectTo: 'person/index', pathMatch: 'full'},
  { path: 'person/index', component: IndexComponent},
  { path: 'person/create', component: CreateComponent},
  { path: 'person/:personID/edit', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
