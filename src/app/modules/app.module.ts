import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }  from '../components/app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { PokemonsModule } from '../pokemons/modules/pokemons.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../services/in-memory-data.service';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from '../components/login/login.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    PokemonsModule,
    LoginRoutingModule,
    AppRoutingModule ],
  declarations: [ AppComponent, LoginComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }