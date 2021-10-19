import { trigger, transition, animate, style, useAnimation } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { slideAnim } from 'src/app/animations/animations';

@Component({
  selector: 'app-surf',
  templateUrl: './surf.component.html',
  styleUrls: ['./surf.component.css'],
  animations: [
    trigger("show", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate('1000ms ease-in', style({ opacity: 1}))
      ])
    ]),
    trigger("displaySurfOne",[
      transition(":enter",[
        useAnimation(slideAnim,{
          params:{
            opacity1: 1,
            opacity2: 1,
            translate1: '300%',
            translate2: '300%',
            translate3: '0',
            translate4: '0',
            translate5: '0',
            translate6: '0',
            time: '600ms ease-in',
            translateValue: 'translate3d',
            translateValue1: 'translate3d'
          }
        })
      ])
    ]),
    trigger("displaySurfTwo",[
      transition(":enter",[
        useAnimation(slideAnim,{
          params:{
            opacity1: 1,
            opacity2: 1,
            translate1: '300%',
            translate2: '0',
            translate3: '0',
            translate4: '0',
            translate5: '0',
            translate6: '0',
            time: '600ms ease-in',
            translateValue: 'translate3d',
            translateValue1: 'translate3d'
          }
        })
      ])
    ]),
    trigger("displaySurfThree",[
      transition(":enter",[
        useAnimation(slideAnim,{
          params:{
            opacity1: 1,
            opacity2: 1,
            translate1: '100%',
            translate2: '-100%',
            translate3: '0',
            translate4: '0',
            translate5: '0',
            translate6: '0',
            time: '600ms ease-in',
            translateValue: 'translate3d',
            translateValue1: 'translate3d'
          }
        })
      ])
    ]),
    trigger("displaySurfFour",[
      transition(":enter",[
        useAnimation(slideAnim,{
          params:{
            opacity1: 1,
            opacity2: 1,
            translate1: '-100%',
            translate2: '100%',
            translate3: '0',
            translate4: '0',
            translate5: '0',
            translate6: '0',
            time: '600ms ease-in',
            translateValue: 'translate3d',
            translateValue1: 'translate3d'
          }
        })
      ])
    ]),
    trigger("displaySurfFive",[
      transition(":enter",[
        useAnimation(slideAnim,{
          params:{
            opacity1: 1,
            opacity2: 1,
            translate1: '0',
            translate2: '-100%',
            translate3: '0',
            translate4: '0',
            translate5: '0',
            translate6: '0',
            time: '600ms ease-in',
            translateValue: 'translate3d',
            translateValue1: 'translate3d'
          }
        })
      ])
    ]),
    trigger("displaySurfSix",[
      transition(":enter",[
        useAnimation(slideAnim,{
          params:{
            opacity1: 1,
            opacity2: 1,
            translate1: '-100%',
            translate2: '100%',
            translate3: '0',
            translate4: '0',
            translate5: '0',
            translate6: '0',
            time: '600ms ease-in',
            translateValue: 'translate3d',
            translateValue1: 'translate3d'
          }
        })
      ])
    ]),

  ]
})
export class SurfComponent implements OnInit {
  @Input("displaySurfOne") displaySurfOne!: boolean;
  @Input("displaySurfTwo") displaySurfTwo!: boolean;
  @Input("displaySurfThree") displaySurfThree!: boolean;
  @Input("displaySurfFour") displaySurfFour!: boolean;
  @Input("displaySurfFive") displaySurfFive!: boolean;
  @Input("displaySurfSix") displaySurfSix!: boolean;

  @Input("displaySurfText") displaySurfText!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
