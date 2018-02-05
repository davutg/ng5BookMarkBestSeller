import { Component } from '@angular/core';
import { DataService } from './data.service';
import { ProductModel } from './product-model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[]
  
})


export class AppComponent {
  title = 'Bookmark Best Seller';
  items =new Array<ProductModel>();
  constructor(private _cart:CartService){
    
    this._cart.items.subscribe(res=>
      {
        this.items=res;             
      });
    
    
  }

ngOnInit() {

  
}

}
