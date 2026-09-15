import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('../portfolio/portfolio-landing.component').then((m) => m.PortfolioLandingComponent),
  },
  { path: '**', redirectTo: '' },
];
