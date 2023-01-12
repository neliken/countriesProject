import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  url = "https://restcountries.com/v2";

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get(`${this.url}/all`)
  }

  getCountryByName(name: string) {
    return this.http.get(`${this.url}/name/${name}`)
  }
}
