import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderNavComponent } from './shared/components/header/header-nav/header-nav.component';
import { HeaderInfoComponent } from './shared/components/header/header-info/header-info.component';
import { FeatureComponent } from './shared/components/feature/feature.component';
import { FeatureInfoComponent } from './shared/components/feature/feature-info/feature-info.component';
import { FeatureCardComponent } from './shared/components/feature/feature-card/feature-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderNavComponent,
    HeaderInfoComponent,
    FeatureComponent,
    FeatureInfoComponent,
    FeatureCardComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
