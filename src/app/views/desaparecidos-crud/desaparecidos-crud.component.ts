import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-desaparecidos-crud',
  templateUrl: './desaparecidos-crud.component.html',
  styleUrls: ['./desaparecidos-crud.component.css']
})
export class DesaparecidosCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToCadastrarDesaparecido(): void {
    this.router.navigate(['/desaparecido/cadastrar'])
  }
}
