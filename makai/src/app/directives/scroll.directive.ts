import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

/*HOME CHILDREN COMPONENTS AND SHOP SCROLL POSITION DETECTION*/


  /*Section element home wrapper*/
  @Output('positionSection') positionSection = new EventEmitter();

  /*Section Collection element home wrapper*/
  @Output('positionSectionCollection') positionSectionCollection = new EventEmitter();

  /*position Item element home wrapper*/
  @Output('positionItem') positionItem = new EventEmitter();

  /*position positionNewsletter wrapper*/
  @Output('positionNewsletter') positionNewsletter = new EventEmitter();

  /* position Heading wrapper*/
  @Output('positionHeading') positionHeading = new EventEmitter();

  /* position Heading wrapper*/
  @Output('positionSurf') positionSurf = new EventEmitter();

  /*position Blog wrapper*/
  @Output('positionBlog') positionBlog = new EventEmitter();

  /* position HeadingBottom  wrapper*/
  @Output('positionHeadingBottom') positionHeadingBottom = new EventEmitter();


  /* position Reviews  wrapper*/
  @Output('positionReviews') positionReviews = new EventEmitter();



    /*position SHOP Items Shop wrapper*/
  @Output('positionShopItem') positionShopItem = new EventEmitter();

  constructor(private el: ElementRef) { }
  ngOnInit(): void {
    this.onScroll(100)
  }

  @HostListener('window:scroll', ['$event'])
  onScroll($event: any) {

    /*Section element home wrapper*/
    if (this.el.nativeElement.offsetTop < (window.pageYOffset + this.el.nativeElement.offsetTop/1.1) && this.el.nativeElement.localName === "app-section") {
      this.positionSection.emit(true);
    }

    /*Section Collection element home wrapper*/
    if (this.el.nativeElement.offsetTop < (window.pageYOffset + this.el.nativeElement.offsetTop/2.4) && this.el.nativeElement.localName === "app-section-collection") {
      this.positionSectionCollection.emit(true);
    }


    /*position Item elements home wrapper*/
    if (this.el.nativeElement.offsetTop + this.el.nativeElement.parentElement.offsetTop < (window.pageYOffset+ this.el.nativeElement.offsetHeight*1.5) && this.el.nativeElement.localName === "app-one-item" && this.el.nativeElement.parentElement.localName != "app-shop-items-right") {
      this.positionItem.emit(this.el.nativeElement.__ngContext__[21].prod_id);
    }

    /*position Newsletter wrapper*/
    if (this.el.nativeElement.offsetTop < (window.pageYOffset + this.el.nativeElement.offsetHeight/1.1) && this.el.nativeElement.localName === "app-newsletter") {
      this.positionNewsletter.emit(true);
    }

    /* position Heading  wrapper*/
    if (this.el.nativeElement.offsetTop-this.el.nativeElement.offsetTop/7 < window.pageYOffset && this.el.nativeElement.localName === "app-heading" && this.el.nativeElement.id != "headingBottom") {
      this.positionHeading.emit(true);
    }

    /* position Surf component  wrapper*/
    if (this.el.nativeElement.offsetTop-this.el.nativeElement.offsetTop/7 < window.pageYOffset && this.el.nativeElement.localName === "app-surf") {
      this.positionSurf.emit(true);
    }

    /*position Blog component  wrapper*/
    if (this.el.nativeElement.offsetTop-this.el.nativeElement.offsetTop/7 < window.pageYOffset && this.el.nativeElement.localName === "app-blog-section") {
      this.positionBlog.emit(true);

    }

    /*position HeadingBottom component  wrapper*/
    if (this.el.nativeElement.offsetTop-this.el.nativeElement.offsetTop/7 < window.pageYOffset && this.el.nativeElement.id === "headingBottom" && this.el.nativeElement.localName === "app-heading") {
      this.positionHeadingBottom.emit(true);
    }

    /*position Reviews component  wrapper*/
    if (this.el.nativeElement.offsetTop-this.el.nativeElement.offsetTop/7 < window.pageYOffset && this.el.nativeElement.localName === "app-reviews") {
      this.positionReviews.emit(false);
      console.log(this.el)
    }

        /*position Shop Item elements Shop wrapper*/
    if (this.el.nativeElement.offsetTop < (window.pageYOffset + this.el.nativeElement.parentElement.offsetTop) && this.el.nativeElement.parentElement.localName === "app-shop-items-right") {
      this.positionShopItem.emit(this.el.nativeElement.__ngContext__[21].prod_id);
    }

  }

}
