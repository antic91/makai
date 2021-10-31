import { Directive, EventEmitter, HostListener, Output, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPosition]'
})
export class PositionDirective {
  @Output('position') position = new EventEmitter()
  constructor(private el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  onScroll($event: any) {
    this.position.emit(window.pageYOffset)
    /*innerHeight*/

  }
}
