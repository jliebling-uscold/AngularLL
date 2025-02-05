import { Routes } from '@angular/router';
import { FreshComponentComponent } from './components/fresh-component/fresh-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { ServiceComponentComponent } from './components/service-component/service-component.component';
import { RxjsComponentComponent } from './components/rxjs-component/rxjs-component.component';
import { HomeComponent } from './components/home/home.component';
import { InputComponent } from './components/input/input.component';
import { RouterComponent } from './components/router/router.component';
import { NgmoduleVsStandaloneComponent } from './components/ngmodule-vs-standalone/ngmodule-vs-standalone.component';

export const routes: Routes = [
  { path: '**', redirectTo: 'HomeComponent' }, // Wildcard route
  { path: '', component: HomeComponent }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'first-component', component: FreshComponentComponent },
  { path: 'service-component', component: ServiceComponentComponent },
  { path: 'rxjs-component', component: RxjsComponentComponent },
  { path: 'input-component', component: InputComponent },
  { path: 'router-component', component: RouterComponent },
  { path: 'ngmodule-vs-standalone', component: NgmoduleVsStandaloneComponent },
];
