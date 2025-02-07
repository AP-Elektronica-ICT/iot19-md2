import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoxService } from 'src/app/services/box.service'
import { IDelivery } from 'src/app/services/model/IDelivery';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormControl } from '@angular/forms';

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
    "boxes": null
  }
  
  constructor(public route: Router, public boxSvc: BoxService, public message: MatSnackBar) { }

  ngOnInit() { }

  Add(){    
    this.delivery = {
      Id: this.boxSvc.Key(),
      Transportername: this.delivery.Transportername,
      BeginPoint: this.delivery.BeginPoint,
      EndPoint: this.delivery.EndPoint,
      Description: this.delivery.Description,
      boxes: null
    }
    
    this.boxSvc.AddDelivery(this.delivery);
    this.message.open("Add box(es)", this.delivery.Transportername,{
      duration: 2000,
    });

    this.route.navigate(['/delivery/'+ this.delivery.Id + '/addBox']);
  }
}
