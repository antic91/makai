import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild("top", { read: ElementRef }) top!: ElementRef;
  @ViewChild("manBoard", { read: ElementRef }) manBoard!: ElementRef;
  @ViewChild("text", { read: ElementRef }) text!: ElementRef;
  @ViewChild("fourSec", { read: ElementRef }) fourSec!: ElementRef;
  @ViewChild("team", { read: ElementRef }) team!: ElementRef;
  @ViewChild("brands", { read: ElementRef }) brands!: ElementRef;
  @ViewChild("box", { read: ElementRef }) box!: ElementRef;

  scaleTop: boolean = false;

  manBoardCompOne: boolean = false;
  manBoardCompTwo: boolean = false;


  textPos: boolean = false;


  fourSections: boolean = false;

  showTeam: boolean = false;

  showBrands: boolean = false;

  showItems: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  detect(event: any): void{
    /*TOP SCALE OUT IN */
    var topComp = (this.top.nativeElement.offsetTop + this.top.nativeElement.offsetTop)- this.top.nativeElement.offsetTop/2
    if (event <= topComp) this.scaleTop = true;
    if (event > topComp) this.scaleTop = false;

    /***************************** */
    /*Man with board OUT IN */
    var manBoardComp = (this.manBoard.nativeElement.offsetTop - this.manBoard.nativeElement.offsetTop / 10) - this.manBoard.nativeElement.offsetTop / 2;
    var manBoardComp1 = this.manBoard.nativeElement.offsetTop - this.manBoard.nativeElement.offsetTop / 3;

    if (event >= manBoardComp) this.manBoardCompOne = true;
    if (event < manBoardComp) this.manBoardCompOne = false;

    if (event >= manBoardComp1) this.manBoardCompTwo = true;
    if (event < manBoardComp1) this.manBoardCompTwo = false;

    /***************************** */
    /*TEXT COMPONENT OUT IN */
    var textPosition = (this.text.nativeElement.offsetTop - this.text.nativeElement.offsetTop/10) - this.text.nativeElement.offsetTop / 2;

    if (event >= textPosition) this.textPos = true;


    /***************************** */
    /*fourSec OUT IN */
    var fourSecPosition = (this.fourSec.nativeElement.offsetTop - this.fourSec.nativeElement.offsetTop/10) - this.fourSec.nativeElement.offsetTop / 2;

    if (event >= fourSecPosition) this.fourSections = true;


    /***************************** */
    /*TEAM OUT IN */
    var teamPosition = (this.team.nativeElement.offsetTop) - this.team.nativeElement.offsetTop / 6.5;

    if (event >= teamPosition) this.showTeam = true;


    /***************************** */
    /*BRANDS OUT IN */
    var brandsPosition = (this.brands.nativeElement.offsetTop) - this.brands.nativeElement.offsetTop / 6.5;

    if (event >= brandsPosition) this.showBrands = true;


    /***************************** */
    /*BOX OUT IN */
    var boxPosition = (this.box.nativeElement.offsetTop) - this.box.nativeElement.offsetTop / 6.5;

    if (event >= boxPosition) this.showItems = true;


    /***************************** */

    console.log(this.top.nativeElement.offsetTop)
  }
}
