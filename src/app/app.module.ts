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
import { IntroComponent, 
		DayOneComponent, 
		DayTwoComponent, 
		DelawareComponent, 
		IndependenceComponent, 
		PrideComponent,
		PennComponent,
		ArtComponent,
		PhillyComponent 
		} from './articles';

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
    DelawareComponent,
    IndependenceComponent,
    PrideComponent,
    PennComponent,
    ArtComponent,
    PhillyComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot([
        {	path: '', component: HomeComponent	},    
        {	path: 'about', component: AboutComponent  },
        {   path: 'intro', component: IntroComponent  },
        { 	path: 'one', component: DayOneComponent  },
        {	path: 'two', component: DayTwoComponent  },
        {   path: 'two/delaware', component: DelawareComponent  },
        {   path: 'two/independence', component: IndependenceComponent },        
        {   path: 'two/pride', component: PrideComponent  },
        {   path: 'two/penn',  component: PennComponent  },
        {   path: 'two/art',  component: ArtComponent   },        
        {   path: 'two/philly', component: PhillyComponent  }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
