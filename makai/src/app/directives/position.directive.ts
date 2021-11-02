import { Directive, EventEmitter, HostListener, Output, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPosition]'
})
export class PositionDirective {


  /*********************SCROLL DETECTION ABOUT SECTION*************************************** */


  innerWidth!: number;

  /*Position top About*/
  @Output('positionTopAbout') positionTopAbout = new EventEmitter();

  /*Position top About*/
  @Output('positionManWithBoard') positionManWithBoard = new EventEmitter();

  /*Position Text component About*/
  @Output('positionTextComponent') positionTextComponent = new EventEmitter();

  /*Position Four Section component About*/
  @Output('positionFourSection') positionFourSection = new EventEmitter();

  /*Position Team First component About*/
  @Output('positionTeamOne') positionTeamOne = new EventEmitter();

  /*Position Team second component About*/
  @Output('positionTeamTwo') positionTeamTwo = new EventEmitter();

  /*Position Team Third component About*/
  @Output('positionTeamThree') positionTeamThree = new EventEmitter();

  /*Position Brands  component About*/
  @Output('positionBrands') positionBrands = new EventEmitter();


  /*Position PhotoBox  component About*/
  @Output('positionPhotoBox') positionPhotoBox = new EventEmitter();


  constructor(private el: ElementRef) { }

  ngAfterViewInit() {

    this.innerWidth = window.innerWidth + 17;

    if (this.innerWidth <= 1025) {

      /*Text component BLOG wrapper IF resize and inner with is under 1025*/
      setTimeout(() => {
          this.positionTextComponent.emit(true);
      }, 1100);

    }
  }




  /*Catching resize */
  @HostListener('window:resize', ['$event'])
  onResize($event: any) {

    this.innerWidth = window.innerWidth + 17;

    if (this.innerWidth <= 1025) {
      /*Text component BLOG wrapper IF resize and inner with is under 1025*/
      this.positionTextComponent.emit(true);

    }

  }

  /*Catching scroll down*/
  @HostListener('window:scroll', ['$event'])
  onScroll($event: any) {

    /*position Top About wrapper*/
    if (this.el.nativeElement.localName === "app-top-component") {
      if (this.el.nativeElement.offsetTop <= (window.pageYOffset)) {
        this.positionTopAbout.emit(true);
      }
      if (this.el.nativeElement.offsetTop > (window.pageYOffset)) {
        this.positionTopAbout.emit(false);
      }
    }


    /*Man with board wrapper position */
    if (this.el.nativeElement.localName === "app-man-with-board") {
      var animOne: boolean = false;
      var animTwo: boolean = false;

      var manBoardComp = (this.el.nativeElement.offsetTop - this.el.nativeElement.offsetTop / 30) - this.el.nativeElement.offsetTop / 2;
      var manBoardComp1 = this.el.nativeElement.offsetTop - this.el.nativeElement.offsetTop / 3;

      if (window.pageYOffset >= manBoardComp) animOne = true;
      if (window.pageYOffset < manBoardComp) animOne = false;

      if (window.pageYOffset >= manBoardComp1) animTwo = true;
      if (window.pageYOffset < manBoardComp1) animTwo = false;
      this.positionManWithBoard.emit({compOne: animOne, compTwo: animTwo})

    }


      /*Text component wrapper position*/
    if (this.el.nativeElement.offsetTop < (window.pageYOffset + this.el.nativeElement.offsetTop/2) && this.el.nativeElement.localName === "app-text-component") {
      this.positionTextComponent.emit(true)
    }

      /*Four Section component wrapper position*/
    if (this.el.nativeElement.offsetTop < (window.pageYOffset + this.el.nativeElement.offsetHeight) && this.el.nativeElement.localName === "app-four-sections") {
      this.positionFourSection.emit(true)
    }


    /*****************TEAM COMPONENT IN ABOUT SECTION 3 DIVS WITH PHOTOS */
    if (this.el.nativeElement.localName === "app-team") {

      var a = this.el.nativeElement.lastChild.offsetHeight / 3;

      if (this.innerWidth <= 1025) {

        if (this.el.nativeElement.offsetTop - a < window.pageYOffset + (a / 2)) {
            console.log(a)
            this.positionTeamOne.emit(true)
          }
          if (this.el.nativeElement.offsetTop < window.pageYOffset+(a / 2)) {
            this.positionTeamTwo.emit(true)
          }
          if (this.el.nativeElement.offsetTop + a < window.pageYOffset+(a / 2) ) {
            this.positionTeamThree.emit(true)
          }

      } else {

        if (this.el.nativeElement.offsetTop - 550 < window.pageYOffset) {

            this.positionTeamOne.emit(true);
            this.positionTeamTwo.emit(true);
            this.positionTeamThree.emit(true);
          }
      }
    }

    /******************************************END TEAM********************************* */

    /*Brands About component*/
    if (this.el.nativeElement.offsetTop -(this.el.nativeElement.offsetTop/6) < window.pageYOffset && this.el.nativeElement.localName === "app-brands-about") {
      this.positionBrands.emit(true)
      console.log(this.el)
    }

    /*Brands About component*/
    if (this.el.nativeElement.offsetTop < (window.pageYOffset + this.el.nativeElement.offsetHeight +(this.el.nativeElement.offsetHeight*0.2)) && this.el.nativeElement.localName === "app-photo-box") {
      this.positionPhotoBox.emit(true)
    }
  }
}
