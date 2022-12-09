import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-realme',
  templateUrl: './realme.component.html',
  styleUrls: ['./realme.component.css']
})
export class RealmeComponent implements OnInit {

  constructor(private realme:ProductsService) { }

  ngOnInit(): void {
    this.realmee()
  }
  rp:any
  realmee()
  {
    this.rp=this.realme.rlm
  }

}
