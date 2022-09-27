import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public icon: string = 'menu';
  public visible: boolean = true;
  
  constructor() { }

  ngOnInit(){
  }

  checkValue(event: any){   
    if (this.icon === 'close') {
      this.icon = 'menu';
      document.getElementById('side').style.display = 'none';
    } else {
      this.icon = 'close';
      document.getElementById('side').style.display = 'block';
      document.getElementById('btn').style.display = 'none';
    }
 }
}
