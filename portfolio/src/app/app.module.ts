import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//Imports Material
import { MatCardModule } from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImageButtonComponent } from './components/image-button/image-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MhCardComponent } from './components/mh-card/mh-card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import { EducationCardComponent } from './components/education-card/education-card.component';
import { SkillsCardComponent } from './components/skills-card/skills-card.component';
import { ProyectsCardComponent } from './components/proyects-card/proyects-card.component';
import { LoginComponent } from './components/login/login.component'


import { RouterModule } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ImageButtonComponent,
    MhCardComponent,
    NavBarComponent,
    EducationCardComponent,
    SkillsCardComponent,
    ProyectsCardComponent,
    LoginComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    FlexLayoutModule,
    MatFormFieldModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
