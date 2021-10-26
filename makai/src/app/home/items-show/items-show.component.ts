import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-show',
  templateUrl: './items-show.component.html',
  styleUrls: ['./items-show.component.css']
})
export class ItemsShowComponent implements OnInit {
  @Input("data") data!: any[];
  @Input("display") display!: boolean;
  hover: boolean = false;
  prod_id!: number
  constructor() { }

  ngOnInit(): void {
  }
  mouseover(i:number): void{
    this.hover = true;
    this.prod_id = i;
  }
  mouseleave(i:number): void{
    this.hover = false;
    this.prod_id = i;
  }
}
