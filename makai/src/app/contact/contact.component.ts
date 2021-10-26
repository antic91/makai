import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild("box", { read: ElementRef }) box!: ElementRef;
  @ViewChild("textCopm", { read: ElementRef }) textCopm!: ElementRef;
  @ViewChild("follow", { read: ElementRef }) follow!: ElementRef;

  showText: boolean = false;

  showFollow: boolean = false;

  showItems: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  detect(event: any): void {
    /*TextPosition OUT IN */
    var TextPosition = (this.textCopm.nativeElement.offsetTop) - this.textCopm.nativeElement.offsetTop / 2;

    if (event >= TextPosition) this.showText = true;
    /***************************** */

    /*follow OUT IN */
    var followPosition = (this.follow.nativeElement.offsetTop) - this.follow.nativeElement.offsetTop / 2;

    if (event >= followPosition) this.showFollow = true;
    /***************************** */

    /*BOX OUT IN */
    var boxPosition = (this.box.nativeElement.offsetTop) - this.box.nativeElement.offsetTop / 3;

    if (event >= boxPosition) this.showItems = true;
    /***************************** */
  }
}
