import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line:import-spacing
import { FormsModule } from'@angular/forms';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuComponent } from './layout/menu/menu.component';
import { LeftMenuComponent } from './layout/left-menu/left-menu.component';
import { AuthorizationComponent } from './home/authorization/authorization.component';
import { CatalogComponent } from './home/catalog-all/catalog/catalog.component';
import { LoginComponent } from './home/login/login.component';
import { ProfileComponent } from './home/profile/profile.component';
import { TovarComponent } from './home/catalog-all/catalog/tovar/tovar.component';
import { AppRoutingModule } from './app-routing.module';
import { InfoMenuComponent } from './layout/info-menu/info-menu.component';
import { CentreCatalComponent } from './home/centre-catal/centre-catal.component';
import { CatalogAllComponent } from './home/catalog-all/catalog-all.component';
import { BasketComponent } from './home/basket/basket.component';
import {FavoritesComponent} from './home/favorites/favorites.component';
import { FeedbackComponent } from './home/feedback/feedback.component';
import { HttpClientModule } from '@angular/common/http';
import { AuxiliaryInformationComponent } from './layout/footer/auxiliary-information/auxiliary-information.component';
import { ToastrModule } from 'ngx-toastr';
import { UserService } from './core/user/user.service';
import { AuthGuard } from './auth/auth.guard';
import { Routes } from '@angular/router';
import { HttpService } from './core/Service/http.service';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LeftMenuComponent,
    AuthorizationComponent,
    CatalogComponent,
    LoginComponent,
    ProfileComponent,
    TovarComponent,
    FavoritesComponent,
    InfoMenuComponent,
    CentreCatalComponent,
    CatalogAllComponent,
    BasketComponent,
    FeedbackComponent,
    AuxiliaryInformationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserModule.withServerTransition({appId: 'yuor-app-id'}),
  ],
  providers: [
      AuthGuard,
    UserService,
    HttpService,
  ],
  bootstrap: [AppComponent]
}

)
export class AppModule { }


