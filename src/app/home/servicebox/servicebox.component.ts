import { Component, OnInit } from '@angular/core';
import { OfferingsService } from 'src/app/appServices/offerings.service';

@Component({
  selector: 'app-servicebox',
  templateUrl: './servicebox.component.html',
  styleUrls: ['./servicebox.component.css']
})
export class ServiceboxComponent implements OnInit {

  constructor(private _OfferingsService:OfferingsService) { }

  services : any = {} ;

  ngOnInit(): void {
    this.services=this._OfferingsService.services;
  }

}
