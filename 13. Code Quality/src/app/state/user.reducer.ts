import { IUserShort } from '../models/user-short';
import { Action, createSelector } from '@ngrx/store';

export const USERS_LOADED = 'USERS_LOADED';

export interface AppState {
    users: Array<IUserShort>;
}

export type ACTIONS =
    | UsersLoadedAction;

export class UsersLoadedAction implements Action {
    readonly type = USERS_LOADED;
    constructor(public payload: IUserShort[]) { }
}

const initialState: AppState = {
    users: []
};

export function usersReducer(state: IUserShort[] = initialState.users,
    action: ACTIONS): IUserShort[] {
    switch (action.type) {
        case USERS_LOADED: {
            return Array.prototype.concat(action.payload);
        }

        default: {
            return state;
        }
    }
}

export const selectUsers = (state: AppState) => state.users;
