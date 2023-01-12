import {Component, OnInit} from '@angular/core';
import {CountriesService} from "../../../countries.service";
import {Country} from "../../../countries";
import {ActivatedRoute} from "@angular/router";

@Component({
  template: `
    <app-country-page
      [country]="country"
    >
    </app-country-page>
  `
})
export class CountryContainerComponent implements OnInit {
  country: Country[] = [];
  constructor(
    private countryService: CountriesService,
    private currentRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const name = this.currentRoute.snapshot.params['name'];

    this.countryService.getCountryByName(name).subscribe(res => {
      const parsedData = JSON.parse(JSON.stringify(res))

      const newObjArray = parsedData.map((item: any) => {
        return Object({
          "nativeName": item.nativeName,
          "population": item.population,
          "region": item.region,
          "capital": item.capital,
          "flag_png": item.flags.png,
          "subregion": item.subregion,
          "top_level_domain": item.topLevelDomain,
          "currencies": item.currencies,
          "languages": item.languages,
          "border_countries": item.borders
        })
      })
      console.log(newObjArray)
      this.country = newObjArray;
    })
  }
}
