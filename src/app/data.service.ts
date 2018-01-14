import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

    products =new BehaviorSubject<any>([]);
    
    //product =this.products.asObservable();
    httpObs:any;
  
    constructor(private _http:HttpClient) { 
      this.loadProducts(_http);
      }

    loadProducts(_http:HttpClient):void
    {
      this.httpObs=this._http.get("/assets/data/products.json");
      
       this.httpObs.subscribe(s=>
      {
        this.products.next(s);
      });
    
    }
    
/*    changeGoal(goal){
        this.goals.next(goal);
    }
*/
    
}
