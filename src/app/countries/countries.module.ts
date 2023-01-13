import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CountriesContainerComponent} from './components/containers/countries-container/countries-container.component';
import {CountryContainerComponent} from './components/containers/country-container/country-container.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {CountrySearchComponent} from './components/containers/country-search/country-search.component';
import {
  CountryFilterByRegionComponent
} from './components/containers/country-filter-by-region/country-filter-by-region.component';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {CountriesPageComponent} from './components/presentational/countries-page/countries-page.component';
import {CountryPageComponent} from './components/presentational/country-page/country-page.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CountriesContainerComponent,
    CountryContainerComponent,
    CountrySearchComponent,
    CountryFilterByRegionComponent,
    CountriesPageComponent,
    CountryPageComponent
  ],
  exports: [
    CountriesContainerComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatCardModule,
        HttpClientModule,
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule
    ]
})
export class CountriesModule {
}
