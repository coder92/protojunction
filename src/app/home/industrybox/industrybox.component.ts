import { Component, OnInit } from '@angular/core';
import { OfferingsService } from 'src/app/appServices/offerings.service';

@Component({
  selector: 'app-industrybox',
  templateUrl: './industrybox.component.html',
  styleUrls: ['./industrybox.component.css']
})
export class IndustryboxComponent implements OnInit {

  constructor(private _OfferingsService:OfferingsService) { }

  services : any = {} ;
  industries : any = {};

  ngOnInit(): void {
    this.services=this._OfferingsService.services;
    this.industries=this._OfferingsService.industries;
  }
}
