import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthcomponentComponent } from './authcomponent/authcomponent.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from '@angular/flex-layout';
import { LandingComponent } from './landing/landing.component';
import { MatCardModule } from "@angular/material/card";
import { Landing1Component } from './landing1/landing1.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { Landing2Component } from './landing2/landing2.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthcomponentComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    Landing1Component,
    TestimonyComponent,
    WorkspaceComponent,
    Landing2Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
