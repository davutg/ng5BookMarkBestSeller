import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

export interface IClientStore
    {
        saveLocalJSON(key:string,value:string):void;
        getLocalJSON(key:string):string;
    }

@Injectable()
export class CookieStrategy implements IClientStore {
        constructor(private _cookies:CookieService) { 
            
          }

        saveLocalJSON(key: string,value:string): void {
            this._cookies.set(key,value); 
        }
        getLocalJSON(key: string): string {
           return this._cookies.get(key);
        }        
    }

@Injectable()
export class DClientContext {
        private strategy: IClientStore;

        constructor(strategy: CookieStrategy) {
            this.strategy = strategy;
        }

        public seveLocalJson(key:string,value:string): void {
            this.strategy.saveLocalJSON(key,value);
        }

        public getLocalJson(key:string): string {
            return this.strategy.getLocalJSON(key);
        }
    }
