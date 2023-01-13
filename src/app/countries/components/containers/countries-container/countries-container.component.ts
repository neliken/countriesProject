import {Component, OnInit} from '@angular/core';
import {CountriesService} from "../../../countries.service";
import {Country} from "../../../countries";

@Component({
  template: `
      <app-countries-page
              [countries]="filteredCountries"
              (onSearchChange)="searchChanged($event)"
              (onRegionChange)="regionChanged($event)"
      ></app-countries-page>
  `,
})
export class CountriesContainerComponent implements OnInit {
  countries: Country[] = [];
  filteredCountries: Country[] = [];

  constructor(private countriesService: CountriesService) {
  }

  public ngOnInit() {
    this.countriesService.getCountries().subscribe(res => {
      const parsedData = JSON.parse(JSON.stringify(res))

      const newObj = parsedData.map((item: any) => {
        return Object({
          "name": item.name,
          "population": item.population,
          "region": item.region,
          "capital": item.capital,
          "flag_png": item.flags.png
        })
      })
      this.countries = newObj;
      this.filteredCountries = this.countries;
    })
  }

  searchChanged(value: string) {
    this.filteredCountries = this.countries.filter(country => country.name.includes(value));
  }

  public regionChanged(value: string) {
    this.filteredCountries = this.countries.filter(country => country.region === value);
  }
}
