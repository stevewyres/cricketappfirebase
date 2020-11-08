import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import { StoreModule } from '@ngrx/store';
import {environment} from '../environments/environment';

import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './admin/teams.component';
import { FooterComponent } from './footer/footer.component';
import { reducers, metaReducers } from './reducers';
import { TeamComponent } from './admin/team.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { FirebaseDatabasService } from './services/firebase-db.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    TeamComponent,
    TeamsComponent,
    HeaderComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
    AppRoutingModule
  ],
  providers: [FirebaseDatabasService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
