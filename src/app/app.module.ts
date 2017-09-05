import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
