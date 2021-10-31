import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any[] = [];
  data1: any[] = [];

  textHead!: string;
  textSpan!: string;
  textHead1!: string;
  textHead2!: string;

  textHeadBottom!: string;
  textSpanBottom!: string;
  textHead1Bottom!: string;
  textHead2Bottom!: string;


  /*section component*/
  display: boolean = false;

  /*section Collection component*/
  displaySec: boolean = false;

  /*Heading after newsletter */
  displayHead: boolean = false;
  displaySpan: boolean = false;

  /*Newsletter display trigger*/
  appear: boolean = false;
  displayNews: boolean = false;

  /*Surf/-- board component triggers*/
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



  constructor(private service: PostService) { }

  ngOnInit(): void {

    this.service.getAll("https://heroku-makai.herokuapp.com/getRandom")
      .subscribe((response: any) => {
        this.data = response.responseSurfboard;
        this.data1 = response.responseAllItems;
    })

    this.textHead = "We are";
    this.textSpan = "Makai";
    this.textHead1 = "Our voice speaks with the ";
    this.textHead2 = "sound of the sea";

    this.textHeadBottom = "See what others";
    this.textSpanBottom = "";
    this.textHead1Bottom = "are saying";
    this.textHead2Bottom = "";

  }


  /*detecting section change*/
  detectPosition($event: boolean): void{
    this.display = $event;
  }

  /*detecting section collection change*/
  detectPositionCollection($event: boolean): void{
    this.displaySec = $event;
  }

  /*detecting Newsletter  change*/
  detectNewsletter($event: boolean): void{
    setTimeout(() => {
          this.displayNews = $event;
        }, 10);
        setTimeout(() => {
          this.appear = $event;
        }, 1600);
  }

  /*detecting Heading  change*/
  detectHeadeing($event: boolean): void{
    this.displayHead = $event;
    this.displaySpan = $event;
  }

  /*detecting Heading  change*/
  detectSurf($event: boolean): void{

        this.displaySurfFour = $event;

        setTimeout(() => {

          this.displaySurfOne = $event;

          setTimeout(() => {

            this.displaySurfFive = $event;

            setTimeout(() => {

              this.displaySurfTwo = $event;

              setTimeout(() => {

                this.displaySurfSix = $event;

                setTimeout(() => {

                  this.displaySurfThree = $event;

                    setTimeout(() => {
                      this.displaySurfText = $event;
                    }, 600);

                }, 100);

              }, 100);

            }, 100);

          }, 100);

        }, 100);
  }

    /*detecting Blog  change*/
  detectBlog($event: boolean): void{
    this.displayBlog = $event;
  }

    /*detecting Heading Bottom  change*/
  detectHeadingBottom($event: boolean): void{
    this.displayHeadSec = $event;
    this.displaySpanSec = $event;
  }

    /*detecting Reviews  change*/
  detectReviews($event: boolean): void{
    this.show = $event;
    this.displayText = $event;
  }

}
