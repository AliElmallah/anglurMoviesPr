import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { TvComponent } from './tv/tv.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FourOfourComponent } from './four-ofour/four-ofour.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MovedetailsComponent } from './movedetails/movedetails.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    PeopleComponent,
    SignupComponent,
    SigninComponent,
    TvComponent,
    NavbarComponent,
    FourOfourComponent,
    HomeheaderComponent,
    MovedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,BrowserAnimationsModule,CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
