import { Component, OnInit, ViewChild, ElementRef, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @ViewChild("video", { read: ElementRef }) video!: ElementRef;
  width!: number;
  constructor() { }

  ngOnInit(): void {
    this.width = window.innerWidth;

  }
  ngAfterViewInit(): void {

    if (this.video.nativeElement.clientWidth <= 730) {
      this.video.nativeElement.pause()
    } else {
      this.video.nativeElement.play()
    }
  }


  /*Detecting width and setting play or pause video on resize*/
  position($event: any): void{
    if (this.video.nativeElement.clientWidth <= 730) {
      this.video.nativeElement.pause()
    } else {
      this.video.nativeElement.play()
    }
  }
}
