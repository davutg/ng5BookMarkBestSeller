import { Component,OnDestroy } from '@angular/core';
import { DataService } from './data.service';
import { ProductModel } from './product-model';
import { CartService } from './cart.service';
import { CartItemModel } from './cart-item-model';
import { TS } from 'typescript-linq';
import { ThrowStmt } from '@angular/compiler';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[]
  
})


export class AppComponent {
  title = 'Bookmark Best Seller';
  items =new Array<CartItemModel>();
  grossTotal:number=0;
  s1:Subscription;
  s2:Subscription;
  constructor(private _cart:CartService){
    
    this.s1= this._cart.items.subscribe(res=>
      {
        this.items=res;      
        
      });
    
      this.s2= this._cart.grossTotal.subscribe((x)=>
        this.grossTotal=x
      ) ;   
  }

  ngOnDestroy(){
   this.s1.unsubscribe();
   this.s2.unsubscribe();
  }


}
