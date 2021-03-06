import { Action } from '@ngrx/store';

export class AuthActions {
    static LOGIN = 'LOGIN';
    static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
    static LOGOUT = 'LOGOUT';
    static LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
    static AUTHORIZE = 'AUTHORIZE';

    login(): Action {
        return { type: AuthActions.LOGIN }
    }

    loginSuccess(): Action {
        return { type: AuthActions.LOGIN_SUCCESS }
    }
}