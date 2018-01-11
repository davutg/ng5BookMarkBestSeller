import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ProductComponent } from '../product/product.component';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

id:number;
ext:string;
httpRes:any;
httpObs:any;
products:any;
    
constructor(private route:ActivatedRoute,private _data:DataService,private _http:HttpClient) {

    this.route.params.subscribe(res=>this.id=res.id);
    this.route.data.subscribe(res=>this.ext=res.ext);
    //this._data.product.subscribe(res=>this.products=res);
    this.httpObs=this._http.get("/assets/data/products.json");
    this.httpObs.subscribe(s=>
      {
        this.products=s;
        this.httpRes=s; 
        console.log(this.httpRes);            
      });
    
}
  
  ngOnInit() {
    
  }

}
