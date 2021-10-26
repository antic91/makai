import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-photo',
  templateUrl: './blog-photo.component.html',
  styleUrls: ['./blog-photo.component.css']
})
export class BlogPhotoComponent implements OnInit {
  @Input("object") object: any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
