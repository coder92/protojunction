import { Component, OnInit } from '@angular/core';
import { OfferingsService } from '../appServices/offerings.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private _OfferingsService:OfferingsService) { }

  services : any = {};
  industries : any = {};


  ngOnInit(): void {
    this.services=this._OfferingsService.services

    this.industries=this._OfferingsService.industries
  }


}
