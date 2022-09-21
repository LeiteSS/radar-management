import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-doacao-crud',
  templateUrl: './doacao-crud.component.html',
  styleUrls: ['./doacao-crud.component.css']
})
export class DoacaoCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToDoar(): void {
    this.router.navigate(['/doar'])
  }

}
