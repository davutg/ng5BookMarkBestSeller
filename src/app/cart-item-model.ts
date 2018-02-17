import { ProductModel } from "./product-model";
import { BsGlobalService } from "./bs-global.service";
import { ReactiveProperty } from 'reactiveproperty'

export class CartItemModel {

    public product:ProductModel ;
    public PK:String=BsGlobalService.genGuid();
    private creation:Date=new Date();;
    public  quantity:number=1;

    constructor(p:ProductModel)
    {        
        this.product=p;  
    }    

}
