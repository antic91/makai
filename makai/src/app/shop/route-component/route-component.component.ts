import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-component',
  templateUrl: './route-component.component.html',
  styleUrls: ['./route-component.component.css']
})
export class RouteComponentComponent implements OnInit {
  cat!: string;
  subCat!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params)
      if (params.cat === "AllItems") {
        this.cat = "All Items";
      } else {
        this.cat = params.cat;
        this.subCat = params.subCat;
      }

    })
  }

}
