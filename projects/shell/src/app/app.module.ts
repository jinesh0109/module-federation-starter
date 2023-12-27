import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { NotFoundComponent } from './not-found/not-found.component';
import { RendererModule, TransferHttpCacheModule } from '@nguniversal/common/clover';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'appId' }),
    RouterModule.forRoot(APP_ROUTES),
    RendererModule.forRoot(),
    TransferHttpCacheModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
