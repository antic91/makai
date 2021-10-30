import { Directive, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';

@Directive({
  selector: '[appResize]'
})
export class ResizeDirective {
  @Output('position') position = new EventEmitter()
  @ViewChild('headerWidth', { read: ElementRef }) headerWidth!: ElementRef;
  constructor() { }

  @HostListener('window:resize', ['$event'])
  onScroll($event:any) {
    this.position.emit("resize")
  }
}
