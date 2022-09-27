import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public icon: string = 'menu';

  constructor() { }

  ngOnInit(){
  }

  checkValue(event: any){   
    if (this.icon === 'close') {
      this.icon = 'menu';
    } else {
      this.icon = 'close'
    }
 }
}
