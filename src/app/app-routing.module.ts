import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FourOfourComponent } from './four-ofour/four-ofour.component';
import { HomeComponent } from './home/home.component';
import { MovedetailsComponent } from './movedetails/movedetails.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:'home', canActivate:[AuthGuard] , component: HomeComponent },
  {path:'movies', canActivate:[AuthGuard], component: MoviesComponent },
  {path:'tv', canActivate:[AuthGuard], component: TvComponent },
  {path:'people', canActivate:[AuthGuard], component: PeopleComponent },
  {path:'moviedetails/:id', canActivate:[AuthGuard], component:MovedetailsComponent },
  {path:'signup', component: SignupComponent },
  {path:'signin', component: SigninComponent },
  {path:'**', component: FourOfourComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
