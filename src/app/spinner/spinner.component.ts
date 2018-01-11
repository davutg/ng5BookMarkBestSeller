import { Component, OnInit } from '@angular/core';
import { Router,NavigationStart,NavigationEnd } from '@angular/router';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})

export class SpinnerComponent implements OnInit {
  
 isBusy:boolean=true;
 constructor(private router:Router) { 
  this.router.events.subscribe(e=>
    {
      //console.info(e); 
      if(e instanceof NavigationStart)
      {
        console.log("Spinner Start at "+new Date());      
        this.isBusy=true;
      }else if (e instanceof NavigationEnd)
      {
        console.log("Spinner End at "+new Date());
        this.isBusy=false;
      }
    });
}

  ngOnInit() {
  
  }

}
