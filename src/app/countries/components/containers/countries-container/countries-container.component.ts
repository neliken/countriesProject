import {Component, OnInit} from '@angular/core';
import {CountriesService} from "../../../countries.service";
import {Country} from "../../../countries";

@Component({
  template: `
      <app-countries-page
              [countries]="countries"
              (onSearchChange)="searchChanged($event)"
              (onRegionChange)="regionChanged($event)"
      ></app-countries-page>
  `,
})
export class CountriesContainerComponent implements OnInit {
  countries: Country[] = [];

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
    })
  }

  public searchChanged(event: any) {

  }

  public regionChanged(event: any) {

  }
}
