import { Component, OnInit } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('items',[
    transition('* => *',[
    query(':enter',style({opacity:0}),{optional:true}) ,
    query(':enter',stagger('300ms',[
    animate('.6s ease-in',keyframes([
      style({opacity:0,transform:'translateY(-75%)',offset:0}),
        style({opacity:.5,transform:'translateY(35px)',offset:.3}),
        style({opacity:1,transform:'translateY(0)',offset:1})
        ]))
        ]),{optional:true})
,
    query(':leave',stagger('300ms',[
        animate('.6s ease-out',keyframes([
        style({opacity:1,transform:'translateY(0)',offset:0}),
        style({opacity:0,transform:'translateY(-35px)',offset:1})
        ]))
        ]),{optional:true})     
        
        ])
        ])
       
  ]
})
export class HomeComponent implements OnInit {
items=["You should at least has a single goal !!!"];
itemsCount:number;
enteredGoal:string="";
constructor(private _data:DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res=>this.items=res);
    this.itemsCount=this.items.length;
      
  }
    
  addGoal()
  {
    this.items.push(this.enteredGoal);
    this.enteredGoal="";
  }
    
    removeItem(ix)
    {
    this.items.splice(ix,1);
    }

}
