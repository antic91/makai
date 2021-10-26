import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-items-right',
  templateUrl: './shop-items-right.component.html',
  styleUrls: ['./shop-items-right.component.css']
})
export class ShopItemsRightComponent implements OnInit {
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
