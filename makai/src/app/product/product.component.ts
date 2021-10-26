import { PostService } from './../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { rotate } from '../animations/animations';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  data1: any[] = [];
  photos: any[] = [];
  displayItem: boolean = true;
  product: any = {};
  headPhoto!: string;
  headerPhoto!: string;
  constructor(private route: ActivatedRoute, private service: PostService) { }

  ngOnInit(): void {
    this.route.params.subscribe((x) => {
      console.log(x)
      const object = {
        catId: x.catId,
        subCatId: x.subCatId,
        prodId: x.prod_id,
      }
      this.service.getProduct("https://heroku-makai.herokuapp.com/getProduct", object)
        .subscribe((response: any) => {
          console.log(response)
          this.data1 = response.array;
          this.product = response.result[0];
          this.photos = this.product.prod_pictures.split(",");
          this.headPhoto = this.photos[0];
          this.headerPhoto = this.headPhoto;
          this.photos.splice(0, 1);
          console.log(this.headPhoto)
          console.log(this.headerPhoto)
          console.log(this.photos)
          console.log(this.product,"product")
      })
    })
  }

}
