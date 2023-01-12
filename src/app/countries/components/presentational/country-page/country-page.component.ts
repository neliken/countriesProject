import {Component, Input, OnInit} from '@angular/core';
import {Country} from "../../../countries";
import {CountriesService} from "../../../countries.service";

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent {
  @Input()
  public country: Country[] = [];
}
