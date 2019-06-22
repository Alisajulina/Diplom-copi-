import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BasketComponent } from './home/basket/basket.component';
import { CentreCatalComponent } from './home/centre-catal/centre-catal.component';
import {FavoritesComponent} from './home/favorites/favorites.component';
import { CatalogAllComponent } from './home/catalog-all/catalog-all.component';
import { TovarComponent } from './home/catalog-all/catalog/tovar/tovar.component';
import {  AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './home/login/login.component';


const routes: Routes = [
  { path: 'centrecat', component: CentreCatalComponent},
  { path: '', component: CentreCatalComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'basket', component: BasketComponent},
  { path: 'favorites', component: FavoritesComponent},
  { path: 'allcatal', component: CatalogAllComponent},
  { path: 'tovar/:id', component: TovarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


