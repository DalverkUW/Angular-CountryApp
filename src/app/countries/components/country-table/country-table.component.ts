import { Country } from './../../interfaces/country';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent {

  constructor() { }

  @Input()
  public countriess: Country[] = [];



}
