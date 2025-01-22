import { Routes } from '@angular/router';
import { FreshComponentComponent } from './components/fresh-component/fresh-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { ServiceComponentComponent } from './components/service-component/service-component.component';
import { RxjsComponentComponent } from './components/rxjs-component/rxjs-component.component';

export const routes: Routes = [
  { path: '**', redirectTo: 'FreshComponentComponent' },
  { path: '', component: FreshComponentComponent },
  { path: 'fresh-component', component: FreshComponentComponent },
  { path: 'second-component', component: SecondComponentComponent },
  { path: 'service-component', component: ServiceComponentComponent },
  { path: 'rxjs-component', component: RxjsComponentComponent },
];
