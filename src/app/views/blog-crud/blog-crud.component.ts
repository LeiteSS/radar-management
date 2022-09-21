import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-blog-crud',
  templateUrl: './blog-crud.component.html',
  styleUrls: ['./blog-crud.component.css']
})
export class BlogCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToPost(): void {
    this.router.navigate(['/post/cadastrar'])
  }

}
