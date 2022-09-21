import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-parceiros-crud',
  templateUrl: './parceiros-crud.component.html',
  styleUrls: ['./parceiros-crud.component.css']
})
export class ParceirosCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToParceiros(): void {
    this.router.navigate(['/parceiro/cadastrar'])
  }

}
