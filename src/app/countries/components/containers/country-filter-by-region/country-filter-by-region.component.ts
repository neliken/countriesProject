import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-country-filter-by-region',
  templateUrl: './country-filter-by-region.component.html',
  styleUrls: ['./country-filter-by-region.component.css']
})
export class CountryFilterByRegionComponent {
  @Output("onSelectChange")
  onSelectChange: EventEmitter<string> = new EventEmitter<string>();

  getSelect(value: string){
    this.onSelectChange.emit(value);
  }
}
