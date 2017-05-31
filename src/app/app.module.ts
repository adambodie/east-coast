import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { AboutComponent } from './about';
import { HomeComponent } from './home';
import { HeaderComponent } from './header';
import { NavbarComponent } from './navbar';
import { FooterComponent } from './footer';
import { CarouselComponent } from './carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarouselModule.forRoot(),
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
