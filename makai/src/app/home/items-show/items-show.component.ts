
import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-items-show',
  templateUrl: './items-show.component.html',
  styleUrls: ['./items-show.component.css']
})
export class ItemsShowComponent implements OnInit {
  @Input("data") data!: any[];
  hover: boolean = false;
  prod_id!: number
  constructor() { }

  ngOnInit(): void {
  }

  /*Hover and mouse out functions for photos change detection*/
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
