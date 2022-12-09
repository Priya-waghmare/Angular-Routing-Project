import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-samsung',
  templateUrl: './samsung.component.html',
  styleUrls: ['./samsung.component.css']
})
export class SamsungComponent implements OnInit {

  constructor(private samsng:ProductsService) { }

  ngOnInit(): void {
    this.sam()
  }
  sp:any
  sam()
  {
    this.sp=this.samsng.samsng
  }

}
