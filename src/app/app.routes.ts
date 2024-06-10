import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', component:HomeComponent },
    { path: 'ecoles',
        loadChildren: () =>
            import('./components/organisations/organisations.module').then(m => m.OrganisationsModule)
     }
];
