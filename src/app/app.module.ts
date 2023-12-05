import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoOneThingComponent } from './do-one-thing/do-one-thing.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    DoOneThingComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
