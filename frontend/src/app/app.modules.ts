import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import { RatingModule } from 'primeng/rating';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ToastrModule, ToastrService, } from "ngx-toastr";
import { ToastrConfig  } from 'ngx-toastr';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HomeComponent } from "./components/pages/home/home.component";
import { HeaderComponent } from "./components/partials/header/header.component";
import { SearchComponent } from "./components/partials/search/search.component";
import { FoodPageComponent } from "./components/pages/food-page/food-page.component";
import { TagsComponent } from "./components/partials/tags/tags.component";
import { NotFoundComponent } from "./components/partials/not-found/not-found.component";
import { CartPageComponent } from "./components/pages/cart-page/cart-page.component";
import { TitleComponent } from "./components/partials/title/title.component";
import { AppRoutingModule } from "./app.routes"; // Assuming this is your routing module
import { LoginPageComponent } from "./components/pages/login-page/login-page.component";
import { UserService } from "./services/user.service";
@NgModule({
  
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    FoodPageComponent,
    TagsComponent,
    HomeComponent,
    TitleComponent,
    CartPageComponent,
    NotFoundComponent,
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    RatingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      newestOnTop: false,
    }),
    AppRoutingModule,

  ],
  providers: [
    ToastrService, 
  ], 
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
