
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TodosComponent } from './todos/todos.component';
const routes:Routes=[

  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'todos',component:TodosComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',component:PagenotfoundComponent},

]


@NgModule({
  declarations: [],
  imports: [
  RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
