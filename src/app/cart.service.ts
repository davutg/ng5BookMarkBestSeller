import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CookieService } from 'ngx-cookie-service';
import { ProductModel } from './product-model';

@Injectable()
export class CartService {

  private items = new BehaviorSubject<any>([]);;
  shoppingList=this.items.asObservable();
  constructor(private _cookies:CookieService) { 

    var cartCache=this._cookies.get('shoppingList')    
    if(cartCache!="")
    this.loadCart(JSON.parse(cartCache));
  }

  loadCart(itemz)
  {   
    this.items.next(itemz);
  }

  getCartItems()
  {
    return this.shoppingList;
  }

  addToCart(wada)
  {
    console.log(wada+" adding ...");
    var cartItems=new Array<ProductModel>();
    var cartCache=this._cookies.get('shoppingList')    
    if(cartCache!="")    
    {      
      cartItems = (JSON.parse(cartCache) as Array<ProductModel>);
      cartItems.push(wada);
    }
    else 
    {
      cartItems.push(wada as ProductModel);
    }
    this._cookies.set('shoppingList',JSON.stringify(cartItems));
    this.loadCart(JSON.parse(this._cookies.get('shoppingList')));
  }


}
