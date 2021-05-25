import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuprimeirocomponenteComponent } from './meuprimeirocomponente/meuprimeirocomponente.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuprimeirocomponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
