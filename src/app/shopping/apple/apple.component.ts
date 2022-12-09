import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {

  constructor(private apl:ProductsService) { }

  ngOnInit(): void {
    this.aple()
  }

  ap:any
  aple()
  {
    this.ap=this.apl.appl
  }
}
