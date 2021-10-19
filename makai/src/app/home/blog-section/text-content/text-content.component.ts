import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-content',
  templateUrl: './text-content.component.html',
  styleUrls: ['./text-content.component.css']
})
export class TextContentComponent implements OnInit {
  @Input("date") date!: string;
  @Input("header") header!: string;
  @Input("readMore") readMore!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
