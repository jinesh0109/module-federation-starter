import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightsModule } from './flights/flights.module';
import { APP_ROUTES } from './app.routes';
import { RendererModule, TransferHttpCacheModule } from '@nguniversal/common/clover';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'appId' }),
    FlightsModule,
    RouterModule.forRoot(APP_ROUTES),
    RendererModule.forRoot(),
    TransferHttpCacheModule
  ],
  declarations: [
    HomeComponent,
    AppComponent,
  ],
  providers: [],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
