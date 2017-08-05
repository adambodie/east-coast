import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { CarouselModule, BsDropdownModule, ModalModule } from 'ngx-bootstrap';
import { SelectModule } from 'ng2-select';
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
		PhillyComponent,
		DayThreeComponent,
		CapitolComponent,
		GeorgetownComponent,
		DayFourComponent,
		ArlingtonComponent,
		MetroComponent,
		DayFiveComponent,
		JerseyComponent,
		WelcomeNycComponent,
		EmpireComponent,
		TrampComponent,
		DaySixComponent,
		LesComponent,
		WtcComponent,
		LibertyComponent,
		TimesComponent,
		OutroComponent			
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
    DayThreeComponent,
    CapitolComponent,
    GeorgetownComponent,
    DayFourComponent,
    ArlingtonComponent,
    MetroComponent,
    DayFiveComponent,
    DaySixComponent,
    OutroComponent,
    JerseyComponent,
    WelcomeNycComponent,
    EmpireComponent,
    TrampComponent,
	LesComponent,
	WtcComponent,
	LibertyComponent,
	TimesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    SelectModule,
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
        {   path: 'two/philly', component: PhillyComponent  },
        {   path: 'three', component: DayThreeComponent  },
        {   path: 'three/capitol', component: CapitolComponent  },
        {   path: 'three/georgetown', component: GeorgetownComponent  },
        {   path: 'four', component: DayFourComponent  },
        {   path: 'four/arlington', component: ArlingtonComponent  },
        {   path: 'four/metro', component: MetroComponent  },
        {   path: 'five', component: DayFiveComponent  },
        {	path: 'five/jersey', component: JerseyComponent },
        {	path: 'five/welcome-nyc', component: WelcomeNycComponent },
        {	path: 'five/empire', component: EmpireComponent },
        {	path: 'five/tramp', component: TrampComponent },                         
        {   path: 'six', component: DaySixComponent  },
        {   path: 'six/les', component: LesComponent  },  
        {   path: 'six/wtc', component: WtcComponent  },
        {   path: 'six/liberty', component: LibertyComponent  },  
        {   path: 'six/times', component: TimesComponent  },                  
        {   path: 'outro', component: OutroComponent  },                                                 
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
