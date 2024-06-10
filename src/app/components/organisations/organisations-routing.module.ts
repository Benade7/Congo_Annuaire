import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcolesComponent } from './ecoles/ecoles.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';

const routes: Routes = [
  { path: 'allEcoles', component: EcolesComponent },
  { path: 'allEntreprise', component: EntreprisesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganisationsRoutingModule { }
