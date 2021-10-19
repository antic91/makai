import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appPosition]'
})
export class PositionDirective {
  @Output('position') position = new EventEmitter()
  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onScroll($event:any) {
    this.position.emit(window.pageYOffset)
  }
}
