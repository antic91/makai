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
  displayItem: boolean = false;
  constructor(private route: ActivatedRoute, private service: PostService) { }

  ngOnInit(): void {
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
        this.detect(0)
    })
  }


  detect($event: number): void{

    /*ItemsOne product SECTION*/
    let i = (this.itemsOne.nativeElement.offsetTop) - (this.itemsOne.nativeElement.offsetTop / 2) *2;

    console.log(i)
    /*ITEMSOne PRODUCTS SECTION*/
    if ($event >= i) this.displayItem = true;

  }
}
