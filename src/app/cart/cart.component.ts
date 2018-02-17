import { Component, OnInit ,OnDestroy } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';
import { CartService } from '../cart.service';
import { CookieService } from 'ngx-cookie-service';
import { ProductModel } from '../product-model';
import { ObservableArray } from 'observable-collection';
import { Subscription } from 'rxjs/Subscription';
import { TS } from 'typescript-linq';
import { DataService } from '../data.service';
import { BsGlobalService } from '../bs-global.service';
import { CartItemModel } from '../cart-item-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
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
  items:Array<CartItemModel>;
  register:Subscription;
  constructor(private _cart:CartService,private _ds:DataService ) { }

  ngOnInit() {
    this.register= this._cart.items.subscribe(res=>
      {
        this.items=res;
        //TODO:do whatever need when a cart item changed        
      }
    );    
  }

  quantitiyChanged(quantitiyChangedItem:CartItemModel,event:Event)
  {
    var updatedQuantity=(event.srcElement as HTMLInputElement).value;
    var newVal=Number.parseInt(updatedQuantity);
    if (!isNaN(newVal) && newVal<100)
    {
      quantitiyChangedItem.quantity=newVal.valueOf();
      this._cart.updateCache();
    }else{
      (event.srcElement as HTMLInputElement).value=quantitiyChangedItem.quantity.toString();
    }
    
  }
    
  removeItem(ix,itm)
  {
    this._cart.removeFromCart(itm);
  }

  ngOnDestroy(){
    this.register.unsubscribe();
  }

}
