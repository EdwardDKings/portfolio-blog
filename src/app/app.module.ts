import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPgComponent } from './pages/landing-pg/landing-pg.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ChangingTextComponent } from './shared/components/changing-text/changing-text.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPgComponent,
    NavbarComponent,
    FooterComponent,
    ChangingTextComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
