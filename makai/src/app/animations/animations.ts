import {
  animation, trigger, animateChild, group,
  transition, animate, style, query, state
} from '@angular/animations';

export const transformBottom = animation([
  style({ transform: '{{translateValue}}({{translate1}})' }),
  animate('{{time}}', style({ transform: '{{translateValue1}}({{translate2}})' }))
]);

export const fadeIn = animation([
  style({ opacity: '{{Value}}' }),
  animate('{{time}}', style({ opacity: '{{Value1}}' }))
]);

export const slideAnim = animation([
  style({  opacity: '{{opacity1}}', transform: '{{translateValue}}({{translate1}},{{translate2}},{{translate3}})' }),
  animate('{{time}}', style({ opacity:'{{opacity2}}', transform: '{{translateValue1}}({{translate4}},{{translate5}},{{translate6}})'}))
]);

export const rotate = animation([
  style({  opacity: '{{opacity1}}', transform: '{{translateValue}}({{translate1}},{{translate2}},{{translate3}},{{translate4}}) {{translateValue1}}({{translate8}},{{translate9}},{{translate10}})' }),
  animate('{{time}}', style({ opacity:'{{opacity2}}', transform: '{{translateValue1}}({{translate5}},{{translate6}},{{translate7}})'}))
]);

export const scale = animation([
  state('begin', style({transform: 'scale(1)'})),
      state('end', style({ transform: 'scale(1.05)' })),
      transition('begin => end', [
        animate(200)
      ]),
      transition('end => begin', [
        animate(200)
      ])
]);





export const fadeUpOnHover = animation([
  trigger('hover', [
          state('active', style({ top: 0 })),
          state('inactive', style({ top: "-100%" })),
          transition('active <=> inactive', animate('275ms ease-in-out')),
          transition('inactive <=> active', animate('275ms ease-in-out'))
    ])
])

/*TEXT HOVERING */
export const hover = {
  animeTrigger: trigger('hover', [
          state('active', style({ top: 0 })),
          state('inactive', style({ top: "-100%" })),
          transition('active <=> inactive', animate('275ms ease-in-out')),
          transition('inactive <=> active', animate('275ms ease-in-out'))
    ])
}
export const hoverBlue = {
  animeTrigger: trigger('hoverBlue', [
          state('active', style({ top: 0 })),
          state('inactive', style({ top: "100%" })),
          transition('active <=> inactive', animate('275ms ease-in-out')),
          transition('inactive <=> active', animate('275ms ease-in-out'))
    ])
}

/*----------------------------*/
