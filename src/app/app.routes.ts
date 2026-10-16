import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Madonna del Pilone | Osteria e Bocciofila a Torino',
    loadComponent: () => import('./pages/home-page.component').then((m) => m.HomePageComponent),
  },
  {
    path: 'prenotazioni',
    title: 'Un tavolo per te | Madonna del Pilone',
    loadComponent: () =>
      import('./pages/booking-page.component').then((m) => m.BookingPageComponent),
  },
  { path: 'prenota', redirectTo: 'prenotazioni', pathMatch: 'full' },
  {
    path: '**',
    title: 'Pagina non trovata | Madonna del Pilone',
    loadComponent: () =>
      import('./pages/not-found-page.component').then((m) => m.NotFoundPageComponent),
  },
];
