import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-vivo',
  templateUrl: './vivo.component.html',
  styleUrls: ['./vivo.component.css']
})
export class VivoComponent implements OnInit {

  constructor(private vivprod:ProductsService) { }

  ngOnInit(): void {
    this.vivo()
  }
vp:any
vivo()
{
  this.vp=this.vivprod.viv
}


}
