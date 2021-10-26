import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { hover, hoverBlue, rotate } from 'src/app/animations/animations';

@Component({
  selector: 'app-blog-text',
  templateUrl: './blog-text.component.html',
  styleUrls: ['./blog-text.component.css'],
  animations: [
    hover.animeTrigger,
    hoverBlue.animeTrigger,
    trigger('slideInBottom', [
      transition(':enter', [
        useAnimation(rotate, {
          params: {
            opacity1: 0,
            opacity2: 1,
            translate1: '1',
            translate2: '1',
            translate3: '1',
            translate4: '5deg',
            translate5: '0',
            translate6: '0',
            translate7: '0',
            translate8: '0',
            translate9: '30%',
            translate10: '0',
            time: '400ms ease-in',
            translateValue: 'rotate3d',
            translateValue1: 'translate3d'
          }
        })
      ])
    ])
  ]
})
export class BlogTextComponent implements OnInit {
  @Input("pTop") pTop!: string;
  @Input("Header") Header!: string;
  @Input("pBottom") pBottom!: string;
  @Input("idBlog") idBlog!: number;
  @Input("name") name!: string;
  @Input("showText") showText!: boolean;

  onHover: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  changeHover(): void{
    this.onHover = true;
  }
  reverse(): void{
    this.onHover = false;
  }
}
