import { PostService } from './../services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, ElementRef, OnInit, Pipe, ViewChild } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { rotate } from '../animations/animations';

@Component({
  selector: 'app-blog-separate',
  templateUrl: './blog-separate.component.html',
  styleUrls: ['./blog-separate.component.css'],
  animations: [
    trigger('rotateInBottom', [
      transition(':enter', [
        useAnimation(rotate, {
          params: {
            opacity1: 0,
            opacity2: 1,
            translate1: '1',
            translate2: '1',
            translate3: '1',
            translate4: '5deg',
            translate5: '0',
            translate6: '0',
            translate7: '0',
            translate8: '0',
            translate9: '30%',
            translate10: '0',
            time: '600ms ease-in',
            translateValue: 'rotate3d',
            translateValue1: 'translate3d'
          }
        })
      ])
    ])
  ]
})
export class BlogSeparateComponent implements OnInit {

  object: any = {};
  arrayData: any[] = [];

  showOther: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private service: PostService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((x: any) => {
      this.service.getBlog("https://heroku-makai.herokuapp.com/getBlog", { name: x.param1, id: x.paramId })
        .subscribe((res: any) => {
          this.object = res.response;
          this.arrayData = res.featuresResponse;
        })
    })
  }
  detectScroll($event: boolean): void{
    this.showOther = $event;
  }
}
