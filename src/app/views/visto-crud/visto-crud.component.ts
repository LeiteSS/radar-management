import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-visto-crud',
  templateUrl: './visto-crud.component.html',
  styleUrls: ['./visto-crud.component.css']
})
export class VistoCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToVisto(): void {
    this.router.navigate(['/visto/cadastrar'])
  }

}
