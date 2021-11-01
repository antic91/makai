import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-man-with-board',
  templateUrl: './man-with-board.component.html',
  styleUrls: ['./man-with-board.component.css'],
  animations: [
    trigger('One', [
    state('true', style({ width: '200px' })),
    state('false', style({ width: '0px' })),
    transition('false <=> true', animate(500))
  ]),
    trigger('Two', [
    state('true', style({ width: '120px' })),
    state('false', style({ width: '0px' })),
    transition('false <=> true', animate(500))
  ])
  ]
})
export class ManWithBoardComponent implements OnInit {

  @Input("manBoardCompOne") manBoardCompOne!: boolean;
  @Input("manBoardCompTwo") manBoardCompTwo!: boolean;

  width: string = "200px";
  width1: string = "120px";
  constructor() { }

  ngOnInit(): void {
  }

}
