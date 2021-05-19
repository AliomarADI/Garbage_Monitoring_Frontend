import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {GarbageRegisterComponent} from './components/garbage-register/garbage-register.component';
import {DocumentationComponent} from './components/documentation/documentation.component';
import {PresentationComponent} from './components/presentation/presentation.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'home' ,  component: HomeComponent},
  {path: 'regGar', component: GarbageRegisterComponent},
  {path: 'doc', component: DocumentationComponent},
  {path: 'preza', component: PresentationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
