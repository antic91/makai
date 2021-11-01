import { Directive, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPositionBlog]'
})
export class PositionBlogDirective {

  innerWidth!: number;

  /*Scroll position Text Blog*/
  @Output("positionBlogText") positionBlogText = new EventEmitter()

  /*Scroll position Other Blogs Blog*/
  @Output("positionOtherBlogsText") positionOtherBlogsText = new EventEmitter()


  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.innerWidth = window.innerWidth + 17;

    if (this.innerWidth <= 1025) {

      /*Text component BLOG wrapper IF resize and inner with is under 1025*/
      setTimeout(() => {
          this.positionBlogText.emit(true);
      }, 1100);

    }
  }


  /*Catching resize */
  @HostListener('window:resize', ['$event'])
  onResize($event: any) {

    this.innerWidth = window.innerWidth + 17;

    if (this.innerWidth <= 1025) {
      /*Text component BLOG wrapper IF resize and inner with is under 1025*/
      this.positionBlogText.emit(true);

    }

  }




  @HostListener("window:scroll", ["$event"])
  onScroll($event:Event) {


    /*Text component BLOG wrapper*/
    if (this.el.nativeElement.offsetTop < (window.pageYOffset + this.el.nativeElement.offsetTop/1.6) && this.el.nativeElement.localName === "app-blog-text") {
      this.positionBlogText.emit(true);
    }

    /*Other Blogs component BLOG wrapper*/
    if (this.el.nativeElement.offsetTop < (window.pageYOffset + this.el.nativeElement.offsetTop/1.6) && this.el.nativeElement.localName === "app-other-blogs") {
      this.positionOtherBlogsText.emit(true);
    }

  }

}
