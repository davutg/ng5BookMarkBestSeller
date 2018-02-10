import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

export interface IClientStore
    {
        save(key:string,value:string):void;
        get(key:string):string;
        checkEnbled():boolean;
    }

export class StoreHandler{
    private handler:StoreHandler ;

    constructor(private preferedStore:IClientStore)
    {
        
    }

    public setHandler(handler:StoreHandler)
    {
        this.handler=handler;
    }

    public getStore():IClientStore
    {
        if(this.preferedStore.checkEnbled())
        {
            return this.preferedStore;
        }else
        {
            return this.handler.getStore();
        }
    }

}

export class StoreHandlerCookie extends StoreHandler
{
    constructor(strategy:CookieStrategy)
    {
        super(strategy);
    }
}

export class StoreHandlerSession extends StoreHandler
{
    constructor(strategy:SessionStorageStrategy)
    {
        super(strategy);
    }
}

export class StoreHandlerLocal extends StoreHandler
{
    constructor(strategy:LocalStorageStrategy)
    {
        super(strategy);
    }
}

    
/*
Cookie: stores data that has to be sent back to the server with subsequent requests. Its expiration varies based on the type and the expiration duration can be set from either server-side or client-side (normally from server-side).
Cookies are primarily for server-side reading (can also be read on client-side), localStorage and sessionStorage can only be read on client-side.
Cookie is being deleted when the  browser is closed by default.
*/    
@Injectable()
export class CookieStrategy implements IClientStore {
        constructor(private _cookies:CookieService) {}

        save(key: string,value:string): void {
            this._cookies.set(key,value); 
        }
        get(key: string): string {
           return this._cookies.get(key);
        }     
        
        checkEnbled(): boolean {
           return navigator.cookieEnabled;
        }
    }

/*
sessionStorage: stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser Cache / Locally Stored Data 
Session storage also deleted once you close the tab.
*/
@Injectable()
export class SessionStorageStrategy implements IClientStore {
        constructor() { }        

        save(key: string,value:string): void {
            sessionStorage.setItem(key,value); 
        }
        get(key: string): string {
            return sessionStorage.getItem(key);
        }     
        checkEnbled(): boolean {
            return typeof(Storage) !== "undefined";
         }   
    }     

/*
localStorage: stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser Cache / Locally Stored Data 
localStorage is stored in browser until you delete it and in considiration of sensitive data you should not use or use it carefuly.
*/
@Injectable()
export class LocalStorageStrategy implements IClientStore {
        constructor() {}

        save(key: string,value:string): void {
            localStorage.setItem(key,value); 
        }
        get(key: string): string {
            return localStorage.getItem(key);
        }    
        checkEnbled(): boolean {
            return typeof(Storage) !== "undefined";
         }     
    }    

    
export class DefaultClientStore
{
    public static getDefaultStore():IClientStore
    {
        var handler1,handler2,handler3:StoreHandler;
        var cs:CookieStrategy=new CookieStrategy(new CookieService(document));
        var ss:SessionStorageStrategy=new SessionStorageStrategy();
        var ls:LocalStorageStrategy=new LocalStorageStrategy();
        handler1=new StoreHandlerCookie(cs);
        handler2=new StoreHandlerSession(ss);
        handler3=new StoreHandlerSession(ls);
        handler1.setHandler(handler2);
        handler2.setHandler(handler3);
        return handler1.getStore();
    }
}

@Injectable()
export class DClientContext {
        private strategy: IClientStore;

        constructor() {
                this.strategy = DefaultClientStore.getDefaultStore();
        }

        public save(key:string,value:string): void {
            this.strategy.save(key,value);
        }

        public get(key:string): string {
            return this.strategy.get(key);
        }
    }