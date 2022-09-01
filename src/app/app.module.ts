import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpacesComponent } from './components/spaces/spaces.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './components/register/register.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { DetailComponent } from './components/detail/detail.component';
import { SpaceComponent } from './components/space/space.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfilComponent } from './components/profil/profil.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SpacesComponent,
    HomeComponent,
    RegisterComponent,
    RegisterFormComponent,
    DetailComponent,
    SpaceComponent,
    ContactComponent,
    ProfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,       
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
