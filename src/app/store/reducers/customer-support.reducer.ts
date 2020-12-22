import { Action, createReducer, on } from '@ngrx/store';
import * as fromSupportActions from '../actions/customer-support.actions';

export const customerSupportFeatureKey = 'customerSupport';

export interface State {
  name: string;
  isSentSuccess: boolean | null;
}

export const initialState: State = {
  name: null,
  isSentSuccess: null,
};

export const custReducer = createReducer(
  initialState,
  on(fromSupportActions.sendingCustomerSupportMessage, (state, action) => {
    return {
      ...state,
      name: action.data.name,
    };
  }),
  on(fromSupportActions.sendMessageStatus, (state, action) => {
    return {
      ...state,
      isSentSuccess: action.isSentSuccess,
    };
  }),
  on(fromSupportActions.clearForm, (state) => {
    return {
      ...state,
      name: null,
      isSentSuccess: null,
    };
  })
);


export function reducer(state: State | undefined, action: Action) {
  return custReducer(state, action);
}
