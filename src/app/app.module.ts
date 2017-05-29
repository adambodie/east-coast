import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AboutComponent } from './about';
import { HeaderComponent } from './header';
import { NavbarComponent } from './navbar';
import { FooterComponent } from './footer';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
