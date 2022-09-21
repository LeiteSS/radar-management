import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-encontrados-crud',
  templateUrl: './encontrados-crud.component.html',
  styleUrls: ['./encontrados-crud.component.css']
})
export class EncontradosCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToEncontrado(): void {
    this.router.navigate(['/encontrado/cadastrar'])
  }
} 
