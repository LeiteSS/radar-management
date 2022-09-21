import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-acesso-crud',
  templateUrl: './acesso-crud.component.html',
  styleUrls: ['./acesso-crud.component.css']
})
export class AcessoCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToCadastrarEntradaSaida(): void {
    this.router.navigate(['/acesso/cadastrar'])
  }
}
