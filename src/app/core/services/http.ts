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
import { Observable } from 'rxjs/Observable';
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

    get(url: string, options?:RequestOptionsArgs): Observable<any> {
       this.requestInterceptor();
       return super.get(this.getFullUrl(url), this.requestOptions(options))
       .do((res: Response) => {
           this.onSubscribeSuccess(res);
       }, (error: any) => {
           console.log("Error",error);
       })
       .finally(() => {
           this.onFinally();
       }) 
    }   

/**
   * Request options.
   * @param options
   * @returns {RequestOptionsArgs}
   */

    private requestOptions(options?: RequestOptions): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions;
        }

        if (options.headers == null) {
            const user = JSON.parse(localStorage.getItem('user'));
            options.headers = new Headers({
                'Content-Type': 'application/json',
                'X-Spree-Token': user && user.spree_api_key
            })
        }
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

    private onFinally(): void {
        this.responseInterceptor();
    }
  }


