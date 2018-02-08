import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from './product-model';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class DataService {


    private productList =new ReplaySubject<Array<ProductModel>>(1);
    products=this.productList.asObservable();
    httpObs:any;
  
    constructor(private _http:HttpClient) { 
      this.loadProducts(_http);      
      }

    loadProducts(_http:HttpClient):void
    {
      this.httpObs=this._http.get("assets/data/products.json");
      
      console.log(typeof(this.httpObs.toString()));
       this.httpObs.subscribe(s=>
      {
          this.productList.next(s);                    
      });
    
    }
}