import { map } from 'rxjs/operators';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  @ViewChild('blogText',{ read: ElementRef }) blogText!: ElementRef;
  @ViewChild('other',{ read: ElementRef }) other!: ElementRef;

  arrayData: any[]= [];
  arrayBlog: {} = {};

  image!: string;

  pTop!: string;
  Header!: string;
  pBottom!: string;
  idBlog!: number;
  name!: string;


  showText: boolean = false;
  showOther: boolean = false;

  constructor(private router: Router, private service: PostService) {
  }

  ngOnInit(): void {
    this.service.getAll("https://heroku-makai.herokuapp.com/getAllBlogs")
      .pipe(
        map((res: any) => res.blogs)
      )
      .subscribe((res: any[]) => {
        this.arrayBlog = res.pop();
        this.arrayData = res;
        this.setImage()
      });
  }
  setImage(): void{
    console.log(this.arrayBlog)
    this.image = JSON.parse(JSON.stringify(this.arrayBlog)).photoTop;

    this.pTop = JSON.parse(JSON.stringify(this.arrayBlog)).date;

    this.Header = JSON.parse(JSON.stringify(this.arrayBlog)).headerTop;

    this.pBottom = JSON.parse(JSON.stringify(this.arrayBlog)).about;

    this.idBlog = JSON.parse(JSON.stringify(this.arrayBlog)).id;

    this.name = JSON.parse(JSON.stringify(this.arrayBlog)).Name;
  }

  detect(event: any): void {

    var TextPosition = (this.blogText.nativeElement.offsetTop) - this.blogText.nativeElement.offsetTop / 1.5;
    if (event >= TextPosition) this.showText = true;

    var OtherPosition = (this.other.nativeElement.offsetTop) - this.other.nativeElement.offsetTop / 1.5;
    if (event >= OtherPosition) this.showOther = true;

  }
}
