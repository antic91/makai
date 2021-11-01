import { Directive, EventEmitter, HostListener, Output, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPositionContact]'
})
export class PositionContactDirective {

  /*Position Text Contact*/
  @Output('positionTextContact') positionTextContact = new EventEmitter();

  /*Position Follow Contact*/
  @Output('positionFollowContact') positionFollowContact = new EventEmitter();

  /*Position Items Contact*/
  @Output('positionItemsContact') positionItemsContact = new EventEmitter();

  constructor(private el: ElementRef) { }


  @HostListener('window:scroll', ['$event'])
  onScroll($event: Event) {

    /*Text component Contact wrapper*/
    if (this.el.nativeElement.offsetTop < (window.pageYOffset + this.el.nativeElement.offsetTop/1.6) && this.el.nativeElement.localName === "app-text-comp") {
      this.positionTextContact.emit(true);
    }

    /*Follow component contact wrapper*/
    if (this.el.nativeElement.offsetTop < (window.pageYOffset + this.el.nativeElement.offsetTop/2) && this.el.nativeElement.localName === "app-follow") {
      this.positionFollowContact.emit(true);
    }

    /*Items component wrapper wrapper*/
    if (this.el.nativeElement.offsetTop < (window.pageYOffset + this.el.nativeElement.offsetTop/2) && this.el.nativeElement.localName === "app-photo-box") {
      this.positionItemsContact.emit(true);
    }

  }

}
