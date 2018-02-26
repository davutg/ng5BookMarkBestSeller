import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ProductComponent } from '../product/product.component';
import { ProductModel } from '../product-model';
import { TS } from 'typescript-linq';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
}
)
export class HomeComponent implements OnInit {


searchKeyword:string="";
products=new Array<ProductModel>();
productsView=new Array<ProductModel>();

constructor(private _data:DataService) { }

  ngOnInit() {
    
    this._data.products.subscribe(res=>
      {
        this.products=res;
        this.productsView=this.products;     
      }
    );   
  }

    
  search()
  {
    if(this.searchKeyword.length<1)
    {
      this.productsView=this.products;
    }else{     
      this.productsView=this.products.filter(f=>
        {
          return f.Name.toLowerCase().indexOf(this.searchKeyword.toLowerCase())>-1 ||
          f.Keywords.toLowerCase().indexOf(this.searchKeyword.toLowerCase())>-1
        }
      );
    }
    this.searchKeyword="";
  }
 

}
