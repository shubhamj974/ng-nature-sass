import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderNavComponent } from './shared/components/header-nav/header-nav.component';
import { HeaderInfoComponent } from './shared/components/header-info/header-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderNavComponent,
    HeaderInfoComponent
     
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
