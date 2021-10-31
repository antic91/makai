import { PostService } from './../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  @ViewChild('itemsOne', { read: ElementRef }) itemsOne!: ElementRef;
  data: any[] = [];

  constructor(private route: ActivatedRoute, private service: PostService) { }

  ngOnInit(): void {

    /*Subscribe to get route paramsand then request data from server*/
    this.route.params.subscribe((x) => {
      var url = "";
      console.log(x)
      if (x.cat == "AllItems") {
        url = "https://heroku-makai.herokuapp.com/AllItems/AllItems";
      } else {
        url = "https://heroku-makai.herokuapp.com/" + x.cat + "/" + x.subCat;
      }
      this.getData(url)
    })
  }

  getData(url: string): void{
    this.service.getAll(url)
      .subscribe((response:any) => {
        this.data = response.response;

    })
  }

}
