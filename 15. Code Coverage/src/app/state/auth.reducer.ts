import { IUserShort } from '../models/user-short';
import { Action, createSelector } from '@ngrx/store';

export const DO_LOGIN = 'DO_LOGIN';

export interface AuthState {
    isLoggedIn: boolean;
}

export type ACTIONS =
    | DoLoginAction;

export class DoLoginAction implements Action {
    readonly type = DO_LOGIN;
    constructor(public payload: boolean) { }
}

const initialState: AuthState = {
    isLoggedIn: false
};

export function authReducer(state = initialState,
    action: ACTIONS): boolean {
    switch (action.type) {
        case DO_LOGIN: {
            return true;
            // return Object.assign({}, state, {
            //     isLoggedIn: true,
            // });
        }

        default: {
            return state.isLoggedIn;
        }
    }
}

