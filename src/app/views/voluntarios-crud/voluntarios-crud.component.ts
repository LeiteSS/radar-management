import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-voluntarios-crud',
  templateUrl: './voluntarios-crud.component.html',
  styleUrls: ['./voluntarios-crud.component.css']
})
export class VoluntariosCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToVoluntario(): void {
    this.router.navigate(['/voluntario/cadastrar'])
  }

}
