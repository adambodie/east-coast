import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { CarouselModule, BsDropdownModule, ModalModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { AboutComponent } from './about';
import { HomeComponent } from './home';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { IntroComponent, DayOneComponent, DayTwoComponent } from './articles';
import { DelawareComponent } from './articles/delaware/delaware.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    DayOneComponent,
    DayTwoComponent,
    DelawareComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot([
        {
          path: 'about',
          component: AboutComponent
        },
        {   path: 'intro',
            component: IntroComponent
        },
        {
          path: '',
          component: HomeComponent
        },
        {
          path: 'one',
          component: DayOneComponent
        },
        {
			path: 'two',
			component: DayTwoComponent
        },
        {
			path: 'two/delaware',
			component: DelawareComponent
        }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
