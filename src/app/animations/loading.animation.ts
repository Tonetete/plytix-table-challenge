import {
  trigger,
  style,
  animate,
  query,
  stagger,
  transition,
  state,
} from '@angular/animations';

export const loadingAnimation = () => {
  return trigger('loading', [
    transition('void => *', [style({ opacity: 0 }), animate(500)]),
  ]);
};
