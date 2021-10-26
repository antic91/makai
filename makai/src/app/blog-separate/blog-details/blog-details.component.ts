import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  @ViewChild("secDetails",{ read: ElementRef }) secDetails!: ElementRef;
  @ViewChild("secText",{ read: ElementRef }) secText!: ElementRef;
  @ViewChild("bottomText",{ read: ElementRef }) bottomText!: ElementRef;
  @ViewChild("groupPhotos",{ read: ElementRef }) groupPhotos!: ElementRef;
  @ViewChild("lastPhoto",{ read: ElementRef }) lastPhoto!: ElementRef;
  @Input("object") object: {} = {};

  showText: boolean = false;
  showSecText: boolean = false;
  showBottomText: boolean = false;
  showGroupPhotos: boolean = false;
  showlastPhoto: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  detect(event: any): void {
    var SecDetailsPosition = (this.secDetails.nativeElement.offsetTop) - this.secDetails.nativeElement.offsetTop / 1.5;
    if (event >= SecDetailsPosition) this.showText = true;

    var SecTextPosition = (this.secText.nativeElement.offsetTop) - this.secText.nativeElement.offsetTop /3;
    if (event >= SecTextPosition) this.showSecText = true;

    var bottomTextPosition = (this.bottomText.nativeElement.offsetTop) - this.bottomText.nativeElement.offsetTop / 5;
    if (event >= bottomTextPosition) this.showBottomText = true;

    var groupPhotos = (this.groupPhotos.nativeElement.offsetTop) - this.groupPhotos.nativeElement.offsetTop / 2;
    if (event >= groupPhotos) this.showGroupPhotos = true;

    var lastPhotoBottom = (this.lastPhoto.nativeElement.offsetTop) - this.lastPhoto.nativeElement.offsetTop / 5;
    if (event >= lastPhotoBottom) this.showlastPhoto = true;
    }

}
