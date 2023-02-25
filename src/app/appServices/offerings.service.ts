import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class OfferingsService {

  constructor() { }

  services=[
    {name:'3D Printing', image:'/assets/img/service/1-3dp.png'},
    {name:'CNC', image:'/assets/img/service/2-cnc.jpg'},
    {name:'Vacuum Casting', image:'/assets/img/service/3-vc.jpg'},
    {name:'Injection Molding', image:'/assets/img/service/4-im.png'},
    {name:'Sheet Metal', image:'/assets/img/service/5-sm.jpg'},
    {name:'3D Design', image:'/assets/img/service/6-3dm.jpg'}
  ]


  industries=[
    {name:'Aerospace', image:'/assets/img/industry/aerospace.jpg' , icon:'flight'},
    {name:'Automotive', image:'/assets/img/industry/automotive.jpg', icon:'agriculture'},
    {name:'Manufacturing', image:'/assets/img/industry/manufacturing.jpg', icon:'precision_manufacturing'},
    {name:'Engineering', image:'/assets/img/industry/engineering.jpg', icon:'engineering'},
    {name:'Medical', image:'/assets/img/industry/medical.jpg', icon:'medical_services'},
    {name:'Dental', image:'/assets/img/industry/dental.jpg', icon:'mood'},
    {name:'Consumer', image:'/assets/img/industry/consumer.jpg', icon:'watch'},
    {name:'Jewelry', image:'/assets/img/industry/jewelry.jpg', icon:'shopping_bag'},
    {name:'Education', image:'/assets/img/industry/education.jpg', icon:'library_books'},
    {name:'Architecture', image:'/assets/img/industry/architecture.jpg', icon:'home_work'},
  ]
}
