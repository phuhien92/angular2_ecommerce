import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { HttpService } from './http';
import { AppState } from '../../interfaces';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../auth/actions/auth.actions';

@Injectable()
export class AuthService {
    constructor(
        private http: HttpService,
        private actions: AuthActions,
        private store: Store<AppState>
    ) {
        
    }

    login(data): Observable<any> {
        return this.http.post(
            'spree/login.json',
            { spree_user: data }
        ).map((res: Response) => {
            data = res.json();

            if (!data.error) {
                this.setTokenInLocalStorage(data);
                this.store.dispatch(this.actions.loginSuccess());
            } else {
                this.http.loading.next({
                    loading: false,
                    hasError: true,
                    hasMsg: 'Please enter valid Credentials'
                })
            }

            return data;
        })
    }

    private setTokenInLocalStorage(data): void {
        const jsonData = JSON.stringify(data);
        localStorage.setItem('user',jsonData);
    }
}