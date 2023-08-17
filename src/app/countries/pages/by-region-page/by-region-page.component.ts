import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';
import { CountryService } from './../../services/countries-service.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent implements OnInit {

  countries: Country[] = []
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  public selectedRegion?: Region

  constructor(private countryService:CountryService) { }

  ngOnInit(): void {
      this.countries = this.countryService.cacheStore.byRegion.countries
      this.selectedRegion = this.countryService.cacheStore.byRegion.region
  }

 searchByRegion( region: Region ){
  this.selectedRegion = region;

  this.countryService.searchRegion(region)
  .subscribe(countriesSUB =>{
    this.countries = countriesSUB;
  })
 }

}
