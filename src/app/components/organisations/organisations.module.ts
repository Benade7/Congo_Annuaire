import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganisationsRoutingModule } from './organisations-routing.module';
import { EcolesComponent } from './ecoles/ecoles.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';


@NgModule({
  declarations: [
    EcolesComponent,
    EntreprisesComponent
  ],
  imports: [
    CommonModule,
    OrganisationsRoutingModule
  ]
})
export class OrganisationsModule { }
