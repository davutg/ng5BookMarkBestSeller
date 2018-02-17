import { Injectable,OnInit,OnDestroy } from '@angular/core';
import { ProductModel } from './product-model';
import { BsGlobalService } from './bs-global.service';
import { ObservableArray } from 'observable-collection';
import { DClientContext, CookieStrategy, SessionStorageStrategy, LocalStorageStrategy, IClientStore, DStoreOptions } from './clientstore/IClientStore';
import { CartItemModel } from './cart-item-model';
import { TS } from 'typescript-linq';
import { ReactiveProperty } from 'reactiveproperty'

@Injectable()
export class CartService {

  public items = new ObservableArray<CartItemModel>();
  public grossTotal:ReactiveProperty<number>=new ReactiveProperty(0);
  private storeSelection:DStoreOptions[]=new Array<DStoreOptions>(DStoreOptions.Cookie,DStoreOptions.Local);

  constructor(private _clientContext: DClientContext) {
    this._clientContext.changeClientStore(this.storeSelection);  
    this.loadFromCache();    
  }

  loadFromCache() {
    var cartCache = this._clientContext.get('shoppingList');
    if (cartCache!=null && cartCache != "") {
      var cachedItems = JSON.parse(cartCache) as CartItemModel[];
      this.loadCart(cachedItems);
    }
  }

  loadCart(itemz: CartItemModel[]) {
    this.items = ObservableArray.from(itemz);
    this.updateGrossTotal();  
  }



  getCartItems() {
    return this.items;
  }

  addToCart(pm:ProductModel) {
    try {
      var existingItem=TS.Linq.Extensions.where(this.items,w=>w.product.Code==pm.Code).first();      
      existingItem.quantity++;      
    } catch (error) {
      var cartItem=new CartItemModel(pm);
      this.items.push(cartItem);     
    }

    this.updateCache();
  }

  removeFromCart(pm: CartItemModel) {
    var ndx = this.items.findIndex((i) => i.PK === pm.PK)
    if (ndx > -1)
    {
      var removedItem = this.items.splice(ndx, 1);
      pm=null;
    }

    this.updateCache();

  }

  updateCache() {
    this._clientContext.save('shoppingList', JSON.stringify(this.items));
    this.updateGrossTotal();
  }

  updateGrossTotal()
  {
    this.grossTotal.value=0;
    TS.Linq.Extensions.forEach(this.items,i=>this.grossTotal.value+=i.quantity);   
  }

  ngOnDestroy(){
    //todo:unregister subscriptions
  }
}
