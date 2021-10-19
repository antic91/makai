import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('section',{ read: ElementRef })section!: ElementRef;
  @ViewChild('sectionCol',{ read: ElementRef })sectionCol!: ElementRef;
  @ViewChild('news',{ read: ElementRef })news!: ElementRef;
  @ViewChild('heading',{ read: ElementRef })heading!: ElementRef;
  @ViewChild('surf', { read: ElementRef }) surf!: ElementRef;
  @ViewChild('blog', { read: ElementRef }) blog!: ElementRef;
  @ViewChild('reviews', { read: ElementRef }) reviews!: ElementRef;
  @ViewChild('headingSec', { read: ElementRef }) headingSec!: ElementRef;

  textHead!: string;
  textSpan!: string;
  textHead1!: string;
  textHead2!: string;

  textHeadBottom!: string;
  textSpanBottom!: string;
  textHead1Bottom!: string;
  textHead2Bottom!: string;

  display: boolean = false;

  displaySec: boolean = false;


  displayHead: boolean = false;
  displaySpan: boolean = false;

  appear: boolean = false;
  displayNews: boolean = false;

  displaySurfOne: boolean = false;
  displaySurfTwo: boolean = false;
  displaySurfThree: boolean = false;
  displaySurfFour: boolean = false;
  displaySurfFive: boolean = false;
  displaySurfSix: boolean = false;
  displaySurfText: boolean = false;

  /*BLOG*/
  displayBlog: boolean = false;

  /*SECOND HEADER SECTION*/

  displayHeadSec: boolean = false;
  displaySpanSec: boolean = false;

  /*REVIEWS*/
  show!: boolean;
  displayText!: boolean;

  constructor() { }

  ngOnInit(): void {

    this.textHead = "We are";
    this.textSpan = "Makai";
    this.textHead1 = "Our voice speaks with the ";
    this.textHead2 = "sound of the sea";

    this.textHeadBottom = "See what others";
    this.textSpanBottom = "";
    this.textHead1Bottom = "are saying";
    this.textHead2Bottom = "";

  }
  detect($event: number): void{
    /*Banner*/
    let a = (this.section.nativeElement.offsetTop / 2) - (this.section.nativeElement.offsetTop / 10);

    /*BRANDS */
    let b = (this.sectionCol.nativeElement.offsetTop / 2) + (this.sectionCol.nativeElement.offsetTop / 10) * 2;

    /*SECTION */
    let c = (this.news.nativeElement.offsetTop / 2) + (this.news.nativeElement.offsetTop / 10) * 2;

    /*SECTION COLLECTION */
    let d = (this.heading.nativeElement.offsetTop / 2) + (this.heading.nativeElement.offsetTop / 10) * 3;

    /*SURF*/
    let e = (this.surf.nativeElement.offsetTop / 2) + (this.surf.nativeElement.offsetTop / 10) * 3;

    /*BLOG SECTION*/
    let f = (this.blog.nativeElement.offsetTop / 2) + (this.blog.nativeElement.offsetTop / 10) * 3;

    /*BLOG SECTION*/
    let h = (this.headingSec.nativeElement.offsetTop / 2) + (this.headingSec.nativeElement.offsetTop / 10) * 3;

    /*REVIEW SECTION*/
    let g = (this.reviews.nativeElement.offsetTop / 2) + (this.reviews.nativeElement.offsetTop / 10) * 3;

    if ($event >= a) this.display = true;

    if ($event >= b) this.displaySec = true;

      if ($event >= c) {

        setTimeout(() => {
          this.displayNews = true;
        }, 10);
        setTimeout(() => {
          this.appear = true
        }, 1600);
      };

      if ($event >= d) {
          this.displayHead = true;
          this.displaySpan = true;
      };
      /*START E --SURF */
      if ($event >= e) {
        this.displaySurfFour = true;

        setTimeout(() => {

          this.displaySurfOne = true;

          setTimeout(() => {

            this.displaySurfFive = true;

            setTimeout(() => {

              this.displaySurfTwo = true;

              setTimeout(() => {

                this.displaySurfSix = true;

                setTimeout(() => {

                  this.displaySurfThree = true;

                    setTimeout(() => {
                      this.displaySurfText = true;
                    }, 600);

                }, 100);

              }, 100);

            }, 100);

          }, 100);

        }, 100);
      };
    /*END E -- SURF */

    /*BLOG SECTION*/
    if ($event >= f) this.displayBlog = true;


    /*SECOND HEADER SECTION*/
    if ($event >= h) {
      this.displayBlog = true;
      this.displayBlog = true;
    }

    /*REVIEWS SECTION*/
    if ($event >= g) {
      this.displayHeadSec = true;
      this.displaySpanSec = true;
    }
  }
}
