import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { CarouselModule, BsDropdownModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { AboutComponent } from './about';
import { HomeComponent } from './home';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { ArticleComponent, ArticleCommentComponent, ArticleCarouselComponent } from './articles';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ArticleCarouselComponent,
    ArticleComponent,
    ArticleCommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot([
        {
          path: 'about',
          component: AboutComponent
        },
        {   path: '',
            component: HomeComponent
        },
        {
          path: 'intro',
          component: ArticleComponent
        }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
