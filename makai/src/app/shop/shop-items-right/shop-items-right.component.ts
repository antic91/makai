import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-items-right',
  templateUrl: './shop-items-right.component.html',
  styleUrls: ['./shop-items-right.component.css']
})
export class ShopItemsRightComponent implements OnInit {
  @Input("data") data!: any[];
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


  /*Position detecting directive*/
  detectPositionItem($event: any): void{
    let id = this.data.map(data =>  data.prod_id ).indexOf($event)
    this.data[id].prod_display = 1
  }

}
