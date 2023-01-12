import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Country} from "../../../countries";

@Component({
  selector: 'app-countries-page',
  templateUrl: './countries-page.component.html',
  styleUrls: ['./countries-page.component.css']
})
export class CountriesPageComponent {
  @Input()
  public countries: Country[] = [];

  @Output()
  public onSearchChange = new EventEmitter<any>();

  @Output()
  public onRegionChange = new EventEmitter<any>();
}
