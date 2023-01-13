import {Component, EventEmitter, Output} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.css']
})
export class CountrySearchComponent {
  @Output("onInputChange")
  onInputChange: EventEmitter<string> = new EventEmitter<string>();

  searchInput = new FormControl('');
  getInput(event: any){
    let { value } = event.target;
    if(this.searchInput.value !== ''){
      this.onInputChange.emit(value);
      this.searchInput.reset('');
    }
  }
}
