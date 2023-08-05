import { Country } from '../../interfaces/country';
import { CountryService } from './../../services/countries-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent {

  countries: Country[] = []

  constructor(private countryService:CountryService) { }

 searchByRegion(region:string){
  this.countryService.searchRegion(region)
  .subscribe(countriesSUB =>{
    this.countries = countriesSUB;
  })
 }

}
