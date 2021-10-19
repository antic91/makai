import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { fadeIn, slideAnim } from 'src/app/animations/animations';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(":enter", [
        useAnimation(fadeIn, {
          params: {
            Value: 0,
            Value1: 1,
            time: '1000ms ease-in'
          }
        })
      ]),
      transition(":leave", [
        useAnimation(fadeIn, {
          params: {
            Value: 1,
            Value1: 0,
            time: '1000ms ease-out'
          }
        })
      ])
    ]),

    trigger('slideAnim', [
      transition(":enter", [
        useAnimation(slideAnim, {
          params: {
            opacity1: 1,
            opacity2: 1,
            time: '1000ms ease-out',
            translateValue:'translate3d',
            translate1:'-100%',
            translate2:'0',
            translate3:'0',
            translateValue1:'translate3d',
            translate4:'0',
            translate5:'0',
            translate6:'0',
          }
        })
      ]),
      transition(":leave", [
        useAnimation(slideAnim, {
          params: {
            opacity1: 1,
            opacity2: 1,
            time: '1000ms ease-out',
            translateValue:'translate3d',
            translate1:'0',
            translate2:'0',
            translate3:'0',
            translateValue1:'translate3d',
            translate4:'-100%',
            translate5:'0',
            translate6:'0',
          }
        })
      ])
    ])
  ]
})
export class ReviewsComponent implements OnInit {
  @Input("show")show!: boolean;
  @Input("displayText")displayText!: boolean;

  photo!: string;
  name!: string;
  text!: string;
  header!: string;
  coverImage!: string;
  stars!: any[];

  position: number = 0;
  length!: number;

  reviews: any[] = [
    { name: 'Lisa Ono', text: 'Lorem ipsum dolor sit amet, con',photo: '../../../assets/user_reviews/user1.jpeg', header: '“Lorem ipsum dolor sit amet, con secte tur adip si cin elit, do eiusmod tempor in cidi dut ut la bore magna aliquat enim.”', stars:'["../../../assets/user_reviews/star.png","../../../assets/user_reviews/star.png", "../../../assets/user_reviews/star.png"]', coverImage:"../../../assets/user_reviews/user1_banner.jpg", display: "true" },
    { name: 'Lisa Ono', text: 'Lorem ipsum dolor sit amet, con',photo: '../../../assets/user_reviews/user2.jpg', header: '“Lorem ipsum dolor sit amet, con secte tur adip si cin elit, do eiusmod tempor in cidi dut ut la bore magna aliquat enim.”', stars:'["../../../assets/user_reviews/star.png","../../../assets/user_reviews/star.png", "../../../assets/user_reviews/star.png"]', coverImage:"../../../assets/user_reviews/user2_banner.jpg", display: "true" },
    { name: 'Lisa Ono', text: 'Lorem ipsum dolor sit amet, con',photo: '../../../assets/user_reviews/user3.jpeg', header: '“Lorem ipsum dolor sit amet, con secte tur adip si cin elit, do eiusmod tempor in cidi dut ut la bore magna aliquat enim.”', stars:'["../../../assets/user_reviews/star.png","../../../assets/user_reviews/star.png", "../../../assets/user_reviews/star.png"]', coverImage:"../../../assets/user_reviews/user3_Banner.jpg", display: "true" }
  ]
  constructor() {
    this.show = true;
    this.displayText = false;
  }

  ngOnInit(): void {
    this.length = this.reviews.length;

    this.photo = this.reviews[this.position].photo;
    this.name = this.reviews[this.position].name;
    this.text = this.reviews[this.position].text;
    this.header = this.reviews[this.position].header;
    this.coverImage = this.reviews[this.position].coverImage;
    this.stars = JSON.parse(this.reviews[this.position].stars);
  }

  add(): void{
    if (this.position == this.length-1) return;
    this.position++;

    this.displayText = true;
    this.show = true;

    setTimeout(() => {
      this.photo = this.reviews[this.position].photo;
      this.name = this.reviews[this.position].name;
      this.text = this.reviews[this.position].text;
      this.header = this.reviews[this.position].header;
      this.coverImage = this.reviews[this.position].coverImage;
      this.stars = JSON.parse(this.reviews[this.position].stars);
        setTimeout(() => {
          this.displayText = false;
          this.show = false;
        }, 200);
    }, 1000);
  }
  remove(): void{
    if (this.position == 0) return;

    this.position--;

    this.displayText = true;
    this.show = true;

    setTimeout(() => {
      this.photo = this.reviews[this.position].photo;
      this.name = this.reviews[this.position].name;
      this.text = this.reviews[this.position].text;
      this.header = this.reviews[this.position].header;
      this.coverImage = this.reviews[this.position].coverImage;
      this.stars = JSON.parse(this.reviews[this.position].stars);
        setTimeout(() => {
          this.displayText = false;
          this.show = false;
        }, 200);
    }, 1000);
  }
}
