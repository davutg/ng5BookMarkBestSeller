export class ProductModel {
    public PK:string;
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

    public SetCode(id:number)
    {
        this.Code=id;
    }

    private setPrice( _price:string)
    {
        this.Price=_price;
    }
}
