import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatosComponent } from './contatos/contatos.component';
import { RodapeComponent } from './rodape/rodape.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OrderServiceService } from './service/order-service.service';
import { AdmComponent } from './adm/adm.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ProdutoComponent } from './produto/produto.component';
import { ServiceWorkerModule } from '@angular/service-worker';
HttpClientModule
FormsModule
OrderServiceService

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    ContatosComponent,
    RodapeComponent,
    MenuComponent,
    AdmComponent,
    DetalhesComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [HttpClientModule, OrderServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
