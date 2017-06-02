/**
 * Http Intercepter Service
 * TODO: Add Loader and Toasty Service currently using console log
 * for showing errors and response and request completion;
 */
import { Injectable } from '@angular/core';
import {
    Http,
    ConnectionBackend,
    RequestOptions,
    RequestOptionsArgs,
    Response,
    Headers,
    Request
} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from './../../../environments/environment';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HttpService extends Http {
    public loading = new Subject();

    constructor(
        backend: ConnectionBackend,
        defaultOptions: RequestOptions
    ) {
        super(backend, defaultOptions);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<any> {
    this.requestInterceptor();
    return super.get(this.getFullUrl(url), this.requestOptions(options))
      .catch(this.onCatch.bind(this))
      .do((res: Response) => {
        this.onSubscribeSuccess(res);
      }, (error: any) => {
        this.onSubscribeError(error);
      })
      .finally(() => {
        this.onFinally();
      });
  }

    /*
     * Request options.
     * @param options
     * @returns {RequestOptionsArgs}
     */

    private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions;
        }

        if (options.headers == null) {
            const user = localStorage.getItem('user') != "undefined" ? JSON.parse(localStorage.getItem('user')) : null;
            options.headers = new Headers({
                'Content-Type': 'application/json',
                'X-Spree-Token': user && user.spree_api_key
            })
        }

        return options;
    }

    /**
   * Request interceptor.
   */

    private requestInterceptor(): void {
        console.log('Sending Request');
        // this.loaderService.showPreloader();
        this.loading.next({
            loading: true, hasError: false, hasMsg: ''
        });
    }

    private responseInterceptor(): void {
        console.log('Request Complete');
    }

    private onSubscribeSuccess(res: Response): void {
        this.loading.next({
            loading: false, hasError: false, hasMsg: ''
        });
    }

    /**
   * Build API url.
   * @param url
   * @returns {string}
   */
    private getFullUrl(url: string): string {
        return environment.API_ENDPOINT + url;
    }

    private onCatch(error: any, caught: Observable<any>): Observable<any> {
        console.info("Something went wrong", error);
        return Observable.of(error);
    }

    private onSubscribeError(error: any): void {
        console.log('Something Went wrong while subscribing', error);

        this.loading.next({
        loading: false, hasError: true, hasMsg: 'Something went wrong'
        });
    }

    private onFinally(): void {
        this.responseInterceptor();
    }
}
