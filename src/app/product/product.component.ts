import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  inputs : ['Name','Code']
})


export class ProductComponent implements OnInit {
  public Name:string;
  public Code:number;
  constructor() { }

  ngOnInit() {
  }

}
