import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-blog',
  templateUrl: './top-blog.component.html',
  styleUrls: ['./top-blog.component.css'],
  animations: [
    trigger("ScaleOut", [
    state('begin', style({transform: 'scale(1)'})),
      state('end', style({ transform: 'scale(1.25)' })),
      transition('begin => end', [
        animate('775ms ease-in-out')
      ]),
      transition('end => begin', [
        animate('775ms ease-in-out')
      ])
    ])
  ]
})
export class TopBlogComponent implements OnInit {
  @Input('image') image!: string;
  displayImage: boolean = false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.displayImage = true;
    }, 300);
  }

}
