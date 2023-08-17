import { Country } from '../../interfaces/country';
import { CountryService } from './../../services/countries-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent implements OnInit {

  public countries: Country[]=[];
  public initialValue: string = '';

  constructor(private countryService:CountryService) { }

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCountries.countries;
    this.initialValue = this.countryService.cacheStore.byCountries.term;
  }

  searcByCountry(term: string){
    this.countryService.searchCountry(term)
    .subscribe(countrySUB => {
      this.countries = countrySUB;
    })
  }

}
