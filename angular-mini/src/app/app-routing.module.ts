import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BasketComponent } from './home/basket/basket.component';
import { CentreCatalComponent } from './home/centre-catal/centre-catal.component';
import {FavoritesComponent} from './home/favorites/favorites.component';
import { CatalogAllComponent } from './home/catalog-all/catalog-all.component';
import { TovarComponent } from './home/catalog-all/catalog/tovar/tovar.component';


const routes: Routes = [
  { path: 'centrecat', component: CentreCatalComponent},
  { path: '', component: CentreCatalComponent},
  { path: 'basket', component: BasketComponent},
  { path: 'favorites', component: FavoritesComponent},
  { path: 'allcatal', component: CatalogAllComponent},
  { path: 'tovar', component: TovarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


