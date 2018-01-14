export class ProductModel {
    public Name:string;
    public Code:number;
    public Price:any;
    public Keywords:string;
    constructor()
    {
        
    }

    getName()
    {
        return this.Name;
    }

    private setPrice( _price:string)
    {
        this.Price=_price;
    }
}
