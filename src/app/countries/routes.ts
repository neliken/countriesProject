import { CountryContainerComponent } from "./components/containers/country-container/country-container.component";
import { CountriesContainerComponent } from "./components/containers/countries-container/countries-container.component";

export const routes = [
  {
    path: 'countries',
    component: CountriesContainerComponent
  },
  {
    path: 'countries/:name',
    component: CountryContainerComponent
  },
  {
    path: '',
    component: CountriesContainerComponent,
    // redirectTo: '/countries',
  },
  // { path: '**', component: PageNotFoundComponent },
]
