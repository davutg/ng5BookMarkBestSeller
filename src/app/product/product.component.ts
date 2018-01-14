import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../cart.service';
import { ProductModel } from '../product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  inputs : ['model']
})


export class ProductComponent implements OnInit {
  model:ProductModel;
  isOver:boolean;
  isChekingOut:boolean;
  constructor(private _cart:CartService) { }

  ngOnInit() {
  }

  addToCart(item)
  {    
    this._cart.addToCart(item);  
  }


}
