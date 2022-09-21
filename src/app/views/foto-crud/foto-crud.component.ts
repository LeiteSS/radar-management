import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-foto-crud',
  templateUrl: './foto-crud.component.html',
  styleUrls: ['./foto-crud.component.css']
})
export class FotoCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToFoto(): void {
    this.router.navigate(['/foto/cadastrar'])
  }
}
