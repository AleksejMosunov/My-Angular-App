import { Routes } from '@angular/router';
import { PasswordGeneratorComponent } from './password-generator/password-generator';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'password-generator',
    component: PasswordGeneratorComponent,
  },
];
