import { Component, OnInit } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';
import { CartService } from '../cart.service';
import { CookieService } from 'ngx-cookie-service';
import { ProductModel } from '../product-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  animations:[
    trigger('items',[
    transition('* => *',[
    query(':enter',style({opacity:0}),{optional:true}) ,
    query(':enter',stagger('300ms',[
    animate('.6s ease-in',keyframes([
      style({opacity:0,transform:'translateY(-75%)',offset:0}),
        style({opacity:.5,transform:'translateY(35px)',offset:.3}),
        style({opacity:1,transform:'translateY(0)',offset:1})
        ]))
        ]),{optional:true})
,
    query(':leave',stagger('300ms',[
        animate('.6s ease-out',keyframes([
        style({opacity:1,transform:'translateY(0)',offset:0}),
        style({opacity:0,transform:'translateY(-35px)',offset:1})
        ]))
        ]),{optional:true})     
        
        ])
        ])
       
  ]
}
)
export class CartComponent implements OnInit {
  items:Array<ProductModel>;
  constructor(private _cart:CartService ) { }

  ngOnInit() {
    this._cart.shoppingList.subscribe(res=>
      {
        this.items=res;
        console.log(res.length +" in cart");
      }
    );
  }
    
  removeItem(ix,itm)
  {
    this._cart.removeFromCart(itm);
    this.items.splice(ix,1);
  }

}
