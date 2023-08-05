import { Country } from '../../interfaces/country';
import { CountryService } from './../../services/countries-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent {

  public countries: Country[]=[]

  constructor(private countryService:CountryService) { }

  searcByCountry(term: string){
    this.countryService.searchCountry(term)
    .subscribe(countrySUB => {
      this.countries = countrySUB;
    })
  }

}
