import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, Input, OnInit, ViewChild, ElementRef, SimpleChanges } from '@angular/core';
import { fadeIn, rotate } from 'src/app/animations/animations';

@Component({
  selector: 'app-other-blogs',
  templateUrl: './other-blogs.component.html',
  styleUrls: ['./other-blogs.component.css'],
  animations: [
    trigger("fadeIn", [
      transition(":enter", [
        useAnimation(fadeIn, {
          params: {
            Value: 0,
            Value1: 1,
            time: '300ms ease-in-out'
          }
        })
      ])
    ]),
    trigger('slideInBottom', [
      transition(':enter', [
        useAnimation(rotate, {
          params: {
            opacity1: 0,
            opacity2: 1,
            translate1: '1',
            translate2: '1',
            translate3: '1',
            translate4: '5deg',
            translate5: '0',
            translate6: '0',
            translate7: '0',
            translate8: '0',
            translate9: '30%',
            translate10: '0',
            time: '600ms ease-in',
            translateValue: 'rotate3d',
            translateValue1: 'translate3d'
          }
        })
      ])
    ])
  ]
})
export class OtherBlogsComponent implements OnInit {

  @ViewChild("otherBlogs", { read: ElementRef }) otherBlogs!: ElementRef;

  @Input('data') data!: any[];
  @Input('showOther') showOther!: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  setDisplay(i: number): void{
    if (this.otherBlogs.nativeElement.parentElement.clientWidth > 730) {
      this.data[i].display = true;
    }
  }
  removeDisplay(i: number): void{
    if (this.otherBlogs.nativeElement.parentElement.clientWidth > 730) {
      this.data[i].display = false;
    }
  }

  /*catching width on resize*/
  position($event: any): void{
    if (this.otherBlogs.nativeElement.parentElement.clientWidth > 730) {
      this.data.forEach(x=>x.display = false)
    } else {
      this.data.forEach(x=>x.display = true)
    }
  }

  /*catch the width to set items all off the time visible*/
  ngOnChanges(changes: SimpleChanges): void {
    if (this.showOther == true) {
      if (this.otherBlogs.nativeElement.parentElement.clientWidth <= 730) {
          setTimeout(() => {
            this.data.forEach(x=>x.display = true)
          }, 900);
      }
    }
  }
}
