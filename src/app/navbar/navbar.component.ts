import { Component, OnInit } from '@angular/core';
import { OfferingsService } from '../appServices/offerings.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  sidemenuoff: boolean = true;
  servicemenuoff:boolean=true;
  industrymenuoff:boolean=true;

  ServiceOn(){
    this.servicemenuoff = !this.servicemenuoff;
  }

  ServiceOff(){
    this.servicemenuoff = true;
  }

  IndustryOn(){
    this.industrymenuoff = !this.industrymenuoff;
  }

  IndustryOff(){
    this.industrymenuoff = true;
  }
  
  services : any = {} ;
  industries : any = {};


  constructor(private _OfferingsService:OfferingsService) { }

  ngOnInit(): void {
    this.services=this._OfferingsService.services
    this.industries=this._OfferingsService.industries
  }

}
