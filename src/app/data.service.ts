import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

    private products =new BehaviorSubject<any>(['Coming soon...']);
    
    product =this.products.asObservable();
    
  
    constructor() { 

      }
    
/*    changeGoal(goal){
        this.goals.next(goal);
    }
*/
    
}
