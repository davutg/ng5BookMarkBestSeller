import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
//import { CookieService } from 'ngx-cookie-service';
import { ProductModel } from './product-model';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { BsGlobalService } from './bs-global.service';
import { ObservableArray } from 'observable-collection';
import { DClientContext } from './clientstore/IClientStore';

@Injectable()
export class CartService {

  public items = new ObservableArray<ProductModel>();
  
  constructor(private _clientContext:DClientContext) {              
    this.loadFromCache();
  }

  loadCart(itemz:ProductModel[])
  {   
    this.items = ObservableArray.from(itemz);
  }

  loadFromCache()
  {
    var cartCache=this._clientContext.getLocalJson('shoppingList') ;   
    if(cartCache!="")
    {
    var cachedItems=JSON.parse(cartCache) as ProductModel[] ;
    this.loadCart(cachedItems);
    }
  }

  getCartItems()
  {
    return this.items;
  }

  addToCart(wada)
  {
    wada.PK=BsGlobalService.genGuid();
    this.items.push(wada);
    this.updateCache();
  }

  removeFromCart(wada:ProductModel)
  {
    var ndx=this.items.findIndex((i)=>i.PK===wada.PK)
    if(ndx>-1)
    var removedItem=this.items.splice(ndx,1);
    
    this.updateCache();      
    
  }
  
  updateCache()
  {
    this._clientContext.seveLocalJson('shoppingList',JSON.stringify(this.items));
  }

}
