import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {GarbageRegisterComponent} from './components/garbage-register/garbage-register.component';
import {DocumentationComponent} from './components/documentation/documentation.component';
import {PresentationComponent} from './components/presentation/presentation.component';
import {GarbagePointsComponent} from "./components/garbage-points/garbage-points.component";

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'home' ,  component: HomeComponent},
  {path: 'register', component: GarbageRegisterComponent},
  {path: 'documentation', component: DocumentationComponent},
  {path: 'presentation', component: PresentationComponent},
  {path: 'points', component: GarbagePointsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
