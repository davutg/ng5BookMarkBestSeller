import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

id:number;
ext:string;
    
goals:any;
    
constructor(private route:ActivatedRoute,private _data:DataService) {
    this.route.params.subscribe(res=>this.id=res.id);
    this.route.data.subscribe(res=>this.ext=res.ext);
    this._data.goal.subscribe(res=>this.goals=res);
}
  
  ngOnInit() {
     
  }

}
