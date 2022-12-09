import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  samsng=
  [
    {s_id:1, s_name:'Samsung Galaxy M33', s_price:16000, s_color:'Green',img:'assets/imgprod/S_M33.png'},
    {s_id:2, s_name:'Samsung Galaxy S20', s_price:29000, s_color:'Cloud Lavender', img:'assets/imgprod/S_S20.png'},
    {s_id:3, s_name:'Samsung Galaxy A53', s_price:30000, s_color:'Lavender',img:'assets/imgprod/Samsung-Galaxy-A53.png'},
    {s_id:4, s_name:'Samsung Galaxy S22', s_price:40000, s_color:'Black', img:'assets/imgprod/S_S22.jpg'},
    {s_id:5, s_name:'Samsung Galaxy F13', s_price:11000, s_color:'Sunrise Copper',img:'assets/imgprod/s_f13.png'},
  ]
  appl=
  [
    {a_id:6, a_name:'Iphone 11', a_price:46000, a_color:'Black', img:'assets/imgprod/iphone11.jpeg'},
    {a_id:7, a_name:'Iphone 12', a_price:65000, a_color:'Purple', img:'assets/imgprod/ip12.jpg'},
    {a_id:8, a_name:'Iphone 12 Pro', a_price:90000, a_color:'Blue', img:'assets/imgprod/apple-iphone-12-pro.webp'},
    {a_id:9, a_name:'Iphone 13', a_price:80000, a_color:'Green', img:'assets/imgprod/Apple-iPhone-13.jpg'},
    {a_id:10, a_name:'Iphone 14', a_price:89000, a_color:'Blue', img:'assets/imgprod/Apple-iPhone-14.jpg'},
  ]
  viv=
  [
    {v_id:11, v_name:'Vivo V25', v_price:28000, v_color:'Blue', img:'assets/imgprod/Vivo-V25.jpg'},
    {v_id:12, v_name:'Vivo V21', v_price:10000, v_color:'Diamond Glow', img:'assets/imgprod/V_V21'},
    {v_id:13, v_name:'Vivo Y75', v_price:21000, v_color:'Lavender',img:'assets/imgprod/Vivo-Y75.jpg'},
    {v_id:14, v_name:'Vivo V15', v_price:17000, v_color:'Blue',img:'assets/imgprod/v15bl'},
    {v_id:15, v_name:'Vivo Y35', v_price:19000, v_color:'Down Gold',img:'assets/imgprod/V_Y35'},
  ]
  rlm=
  [
    {r_id:16, r_name:'Realme 9', r_price:16000, r_color:'Blue',img:'assets/imgprod/R_9.jpg'},
    {r_id:17, r_name:'Realme C35', r_price:15000, r_color:'Black',img:'assets/imgprod/realme-c35'},
    {r_id:18, r_name:'Realme 9i', r_price:15000, r_color:'Black', img:'assets/imgprod/Realme9i.webp'},
    {r_id:19, r_name:'Realme C12', r_price:9000, r_color:'Sky Blue', img:'assets/imgprod/rl_c12.png'},
    {r_id:20, r_name:'Realme 8s', r_price:17450, r_color:'Purple', img:'assets/imgprod/realme-8s.jpg'},
  ]



}
