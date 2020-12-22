import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { User } from 'src/app/modules/auth/resources/auth';
import {custReducer} from './customer-support.reducer';

export const authFeatureKey = 'auth';

export interface State {
  user: User;
  error: any;
}

export const initialState: State = {
  user: {
    id: null,
    username: null,
    email: null,
    isadmin: null,
  },
  error: null,
};

export const authReducer = createReducer(
  initialState,

  on(AuthActions.loginSuccess, AuthActions.browserReload, (state, action) => {
    return {
      ...state,
      user: action.user,
      error: null,
    };
  }),
  on(AuthActions.loginFailure, (state, action) => {
    return {
      ...state,
      user: {
        id: null,
        username: null,
        email: null,
        isadmin: null,
      },
      error: action.error,
    };
  }),
  on(AuthActions.logout, (state, action) => {
    return {
      ...state,
      user: {
        id: null,
        username: null,
        email: null,
        isadmin: null,
      },
      error: null,
    };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
