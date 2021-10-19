import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { hover, hoverBlue } from 'src/app/animations/animations';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  animations: [
    hover.animeTrigger,
    hoverBlue.animeTrigger
  ]
})
export class PageComponent implements OnInit {

  hoverAbout: boolean = false;

  hoverShop: boolean = false;

  hoverBlog: boolean = false;

  hoverContact: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeHover(a:string): void{
    if (a == "about") this.hoverAbout = true;
    if (a == "shop") this.hoverShop = true;
    if (a == "blog") this.hoverBlog = true;
    if (a == "contact") this.hoverContact = true;
  }
  reverse(b:string): void{
    if (b == "about") this.hoverAbout = false;
    if (b == "shop") this.hoverShop = false;
    if (b == "blog") this.hoverBlog = false;
    if (b == "contact") this.hoverContact = false;
  }
}
