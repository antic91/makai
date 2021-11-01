import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appPositionOneBlog]'
})
export class PositionOneBlogDirective {

  innerWidth!: number;

  /*position other Blogs separate Blog */
  @Output("positionOtherBlogs") positionOtherBlogs = new EventEmitter();

  /*position Second Blog details separate Blog */
  @Output("positionSecondBlogDetails") positionSecondBlogDetails = new EventEmitter();

  /*position Group Photos Blog Details separate Blog */
  @Output("positionGroupPhotosBlogDetails") positionGroupPhotosBlogDetails = new EventEmitter();

  /*position Second Details Text Blog Details separate Blog */
  @Output("positionSecondDetailsText") positionSecondDetailsText = new EventEmitter();

  /*position Last Photo Blog Details  separate Blog */
  @Output("positionLastPhotoBlogDetails") positionLastPhotoBlogDetails = new EventEmitter();

  /*positionBottom details Blog Details  separate Blog */
  @Output("positionBottomBlogDetails") positionBottomBlogDetails = new EventEmitter();

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.innerWidth = window.innerWidth + 17;
    if (this.innerWidth <= 1025) {

      /*position other Blogs separate Blog resize and inner with is under 1025*/
      setTimeout(() => {
          this.positionSecondBlogDetails.emit(true);
      }, 1100);

    }
  }


  /*Catching resize */
  @HostListener('window:resize', ['$event'])
  onResize($event: any) {

    this.innerWidth = window.innerWidth + 17;

    if (this.innerWidth <= 1025) {

      /*position other Blogs separate Blog  IF resize and inner with is under 1025*/
      this.positionSecondBlogDetails.emit(true);

    }

  }




  @HostListener("window:scroll", ["$event"])
  onScroll($event:Event) {

    /*position other Blogs separate Blog   separate Blog*/
    if (this.el.nativeElement.offsetTop < (window.pageYOffset + this.el.nativeElement.offsetTop/3.5) && this.el.nativeElement.localName === "app-other-blogs") {
      this.positionOtherBlogs.emit(true);
    }

    /*position Second Blog details separate Blog   separate Blog*/
    if (this.el.nativeElement.offsetTop < (window.pageYOffset + this.el.nativeElement.offsetTop/2) && this.el.nativeElement.localName === "app-second-details") {
      this.positionSecondBlogDetails.emit(true);
    }

    /*position Group Photos Blog Details separate Blog */
    if (this.el.nativeElement.offsetTop < (window.pageYOffset + this.el.nativeElement.offsetTop/2) && this.el.nativeElement.localName === "app-group-photos") {
      this.positionGroupPhotosBlogDetails.emit(true);
    }

    /*position Second Details Text Blog Details separate Blog */
    if (this.el.nativeElement.offsetTop < (window.pageYOffset + this.el.nativeElement.offsetTop/2) && this.el.nativeElement.localName === "app-second-text") {
      this.positionSecondDetailsText.emit(true);
    }

    /*position LAST PHOTO Blog Details separate Blog */
    if (this.el.nativeElement.offsetTop < (window.pageYOffset) && this.el.nativeElement.localName === "app-last-photo") {
      this.positionLastPhotoBlogDetails.emit(true);
    }

    /*position bottom details Blog Details separate Blog */
    if (this.el.nativeElement.offsetTop < (window.pageYOffset + this.el.nativeElement.offsetTop/2) && this.el.nativeElement.localName === "app-bottom-text") {
      this.positionBottomBlogDetails.emit(true);
    }

  }

}
