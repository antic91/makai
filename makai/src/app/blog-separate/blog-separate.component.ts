import { PostService } from './../services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, ElementRef, OnInit, Pipe, ViewChild } from '@angular/core';

@Component({
  selector: 'app-blog-separate',
  templateUrl: './blog-separate.component.html',
  styleUrls: ['./blog-separate.component.css']
})
export class BlogSeparateComponent implements OnInit {

  @ViewChild('other', { read: ElementRef }) other!: ElementRef;

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
  detect(event:any): void{
      var OtherPosition = (this.other.nativeElement.offsetTop) - this.other.nativeElement.offsetTop / 2;
      if (event >= OtherPosition) this.showOther = true;
  }
}
