import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-mensagens-crud',
  templateUrl: './mensagens-crud.component.html',
  styleUrls: ['./mensagens-crud.component.css']
})
export class MensagensCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
