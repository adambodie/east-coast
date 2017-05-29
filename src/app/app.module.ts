import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about';
import { HomeComponent } from './home';
import { HeaderComponent } from './header';
import { NavbarComponent } from './navbar';
import { FooterComponent } from './footer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        {
          path: 'about',
          component: AboutComponent
        },
        {   path: '',
            component: HomeComponent
        }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
