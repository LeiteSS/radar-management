import { Component, OnInit, HostListener } from '@angular/core';

import { ETheme } from './enums/ETheme.enum';
import { HeaderService } from './header.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  public nome: string = ETheme.NOME_COM_CONTRASTE;

  font_size = 16;
  setFontSize(idd: string) {

    //calc font size
    if(idd === 'a+'){
      this.font_size += 1;
    } else if(idd === 'a-') {
      this.font_size -= 1;
    } else {
      this.font_size = 16;
    }

    //set font size
    let htmlRoot:HTMLElement = <HTMLElement> document.getElementsByTagName("html")[0];
    if (htmlRoot != null) {
       htmlRoot.style.fontSize = `${this.font_size}px`;
    }

  }

  ngOnInit(): void {
  }

  public toogle() {
    const theme = document.body.classList.toggle('contraste');

    if (theme) {
      return (this.nome = ETheme.NOME_SEM_CONTRASTE);
    }

    return (this.nome = ETheme.NOME_COM_CONTRASTE)
  }

  //
  get title(): string {
    return this.headerService.headerData.title
  }

  get icon(): string {
    return this.headerService.headerData.icon
  }

  get routeUrl(): string {
    return this.headerService.headerData.routeUrl
  }

}
