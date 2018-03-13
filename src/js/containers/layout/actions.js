import {calculateResponsiveState} from 'redux-responsive';

export const viewActions = {
  resize: (wdw) => calculateResponsiveState(wdw)
}
