import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CookieService } from 'ngx-cookie-service';
import { ProductModel } from './product-model';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { BsGlobalService } from './bs-global.service';

@Injectable()
export class CartService {

  private items = new ReplaySubject<Array<ProductModel>>(1);
  private deletedItem = new ReplaySubject<ProductModel>(1);;

  shoppingList=this.items.asObservable();
  constructor(private _cookies:CookieService) { 

    this.loadFromCache();
  }

  loadCart(itemz)
  {   
    this.items.next(itemz);
  }

  loadFromCache()
  {
    var cartCache=this._cookies.get('shoppingList')    
    if(cartCache!="")
    this.loadCart(JSON.parse(cartCache));
  }

  getCartItems()
  {
    return this.shoppingList;
  }

  addToCart(wada)
  {
    wada.PK=BsGlobalService.genGuid();
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

  removeFromCart(wada)
  {
    console.log(wada+" removing ...");
    var cartItems=new Array<ProductModel>();
    var cartCache=this._cookies.get('shoppingList')

    if(cartCache!="")    
    {      
      cartItems = (JSON.parse(cartCache) as Array<ProductModel>);
      var model=cartItems.filter(item=>item.PK==wada.PK)[0];
      cartItems.splice(cartItems.indexOf(model),1);
    }
    else 
    {
      var model=cartItems.filter(item=>item.PK==wada.PK)[0];
      cartItems.splice(cartItems.indexOf(model),1);
    }
    this._cookies.set('shoppingList',JSON.stringify(cartItems));    
    //this.loadCart(JSON.parse(this._cookies.get('shoppingList')));
  }


}
