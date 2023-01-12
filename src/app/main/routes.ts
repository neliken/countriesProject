export const routes = [
  {
    path: '',
    loadChildren: () => import('../countries/countries.module').then(m => m.CountriesModule),
  }
];
