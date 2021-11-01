import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  /*Position text*/
  showText: boolean = false;

  /*Scroll position Follow*/
  showFollow: boolean = false;

  /*Scroll position items bottom*/
  showItems: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  /*Detecting Text scroll position*/
  detectingPositionText($event: boolean): void{
    this.showText = $event;
  }

  /*Detecting Follow scroll position*/
  detectingPositionFollow($event: boolean): void{
    this.showFollow = $event;
  }
  /*Detecting items scroll position*/
  detectingPositionItems($event: boolean): void{
      this.showItems = $event;
  }
}
