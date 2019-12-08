import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoxService } from 'src/app/services/box.service'
import { IDelivery } from 'src/app/services/model/IDelivery';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  delivery: IDelivery = {
    "Id": null,
    "Transportername": null,
    "BeginPoint": null,
    "EndPoint": null,
    "Description": null,
    "Boxes": null
  }

  constructor(public route: Router, public boxSvc: BoxService) { }

  ngOnInit() { }

  Add(){    
    this.delivery = {
      Id: this.delivery.Transportername.replace(/\s+/g, '') + "_"+ this.delivery.BeginPoint  + "_"+ this.delivery.EndPoint,
      Transportername: this.delivery.Transportername,
      BeginPoint: this.delivery.BeginPoint,
      EndPoint: this.delivery.EndPoint,
      Description: this.delivery.Description,
      Boxes: null
    }
    
    this.boxSvc.AddDelivery(this.delivery);
    this.route.navigateByUrl("/home")
  }
}
