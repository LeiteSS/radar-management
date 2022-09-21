import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-recompensas-crud',
  templateUrl: './recompensas-crud.component.html',
  styleUrls: ['./recompensas-crud.component.css']
})
export class RecompensasCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToRecompensa(): void {
    this.router.navigate(['/recompensa/cadastrar'])
  }
}
