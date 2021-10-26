import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
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
export class TopComponent implements OnInit {
  @Input("object") object: any = {};
  objectStatus: boolean = false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.objectStatus = true;
    }, 300);
  }

}
