import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  @Input("object") object: {} = {};

  showText: boolean = false;
  showSecText: boolean = false;
  showBottomText: boolean = false;
  showGroupPhotos: boolean = false;
  showlastPhoto: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  /*Second-blog details scroll position*/
  detectSecondBlogDetails($event:boolean): void{
    this.showText = $event
  }

  /*Group photo wrapper scroll position*/
  detectGruopPhotos($event:boolean): void{
    this.showGroupPhotos = $event
  }

  /*Second text wrapper scroll position*/
  detectSecondTextBlogDetails($event:boolean): void{
    this.showSecText = $event
  }
  /*Bottom text wrapper scroll position*/
  detectBottomTextBlogDetails($event:boolean): void{
    this.showBottomText = $event
  }

  /*Bottom wrapper scroll position*/
  detectBottomBlogDetails($event:boolean): void{
    this.showlastPhoto = $event
  }


}
