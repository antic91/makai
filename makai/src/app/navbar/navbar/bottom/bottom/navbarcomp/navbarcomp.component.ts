import { trigger, state, style, transition, animate, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeIn, hover, hoverBlue, slideAnim } from 'src/app/animations/animations';

@Component({
  selector: 'app-navbarcomp',
  templateUrl: './navbarcomp.component.html',
  styleUrls: ['./navbarcomp.component.css'],
  animations: [
    hover.animeTrigger,
    hoverBlue.animeTrigger,
    trigger('hoverImg', [
          state('active', style({ top: '5px' })),
          state('inactive', style({ top: "-100%" })),
          transition('active <=> inactive', animate('275ms ease-in-out')),
          transition('inactive <=> active', animate('275ms ease-in-out'))
    ]),

    trigger('hoverImgBlue', [
          state('active', style({ top: '4px' })),
          state('inactive', style({ top: "100%" })),
          transition('active <=> inactive', animate('275ms ease-in-out')),
          transition('inactive <=> active', animate('275ms ease-in-out'))
    ]),
    trigger("slideAnim", [
      transition(":enter", [
        useAnimation(fadeIn, {
          params: {
            Value: 0,
            Value1: 1,
            time:"500ms ease-in-out"
          }
        })
      ])
    ])
  ]
})
export class NavbarcompComponent implements OnInit {

  displayDropDown: boolean = false;
  DropDownPosition: boolean = false;

  hoverAbout: boolean = false;

  hoverShop: boolean = false;
  hoverBlue: boolean = false;
  hoverShop1: boolean = false;
  hoverBlue1: boolean = false;

  hoverBlog: boolean = false;

  hoverContact: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  changeHover(a:string): void{
    if (a == "about") this.hoverAbout = true;
    if (a == "shop") {
      this.hoverShop1 = true;
      this.hoverBlue1 = true;
      this.displayDropDown = true;
    }
    if (a == "shop1") {
      this.hoverShop = true;
      this.hoverBlue = true;
    }
    if (a == "blog") this.hoverBlog = true;
    if (a == "contact") this.hoverContact = true;
  }
  reverse(b:string): void{
    if (b == "about") this.hoverAbout = false;
    if (b == "shop") {
      this.hoverShop = false;
      this.hoverBlue = false;
      this.hoverShop1 = false;
    this.hoverBlue1 = false;
      setTimeout(() => {
        if(!this.DropDownPosition) this.displayDropDown = false;
      }, 200);
    }
    if (b == "blog") this.hoverBlog = false;
    if (b == "contact") this.hoverContact = false;
  }


  changeHoverAbsolute(): void{
    this.displayDropDown = true;
    this.DropDownPosition = true;

  }
  reverseAbsolute(): void{
    this.displayDropDown = false;
    this.DropDownPosition = false;
    this.hoverShop1 = false;
    this.hoverBlue1 = false;
  }
}
