import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesContainerComponent } from './components/containers/countries-container/countries-container.component';
import { CountryContainerComponent } from './components/containers/country-container/country-container.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import { CountryCardComponent } from './components/containers/country-card/country-card.component';
import { CountrySearchComponent } from './components/containers/country-search/country-search.component';
import { CountryFilterByRegionComponent } from './components/containers/country-filter-by-region/country-filter-by-region.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    declarations: [
        CountriesContainerComponent,
        CountryContainerComponent,
        CountryCardComponent,
        CountrySearchComponent,
        CountryFilterByRegionComponent
    ],
    exports: [
        CountriesContainerComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatCardModule
    ]
})
export class CountriesModule { }
