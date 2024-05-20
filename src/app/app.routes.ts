import { Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AnimalsComponent } from './animals/ListAnimals/animals.component';
import { DetailAnimalComponent } from './animals/detail-animal/detail-animal.component';
import { VeterinaryComponent } from './veterinary/veterinary.component';
import { ListRapportComponent } from './list-rapport/list-rapport.component';
export const routes: Routes = [
  {
    path: 'acceuil',
    component: AcceuilComponent,
    pathMatch: 'full',

  },

  {
    path: '',
    redirectTo: 'acceuil',
    pathMatch: 'full',


  },

  {
    path: 'animals',
    component: AnimalsComponent,


  },


  {
    path: 'animals/:id',
    component: DetailAnimalComponent,
  },

{
  path: 'veterinary',
  component: VeterinaryComponent,
  pathMatch: 'full',
},
{
path: 'veterinary/animals/:id',
component: ListRapportComponent,
}


]


