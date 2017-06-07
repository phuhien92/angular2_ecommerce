import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import {
  Headers,
  Http,
  Response,
  URLSearchParams,
  RequestOptionsArgs
} from '@angular/http';
import { Observable }  from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {
  public loading = new Subject();

  constructor(
    private http: Http,
  ) {}

  private setHeaders(options?: RequestOptionsArgs): Headers {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    // if (options.headers == null) {
      const user = localStorage.getItem('user') != "undefined" ? JSON.parse(localStorage.getItem('user')) : null;

      headersConfig['X-Spree-Token'] = user && user.spree_api_key

      options = headersConfig;
    // }

    return new Headers(options);
  }

  private formatErrors(error: any) {
    console.warn("Something got wrong");
    return Observable.throw(error.json());
  }

  get(path: string, params: URLSearchParams = new URLSearchParams() ): Observable<any> {
    const env = environment.API_ENDPOINT;
    const url = env + path;

    this.requestInterceptor();
    return this.http.get(url, { headers: this.setHeaders(), search: params})
    .catch(this.formatErrors)
    .map((res: Response) => {
      console.log(res)
      return res.json();
    });
  }

  put(path: string, body: Object = {}): Observable<any> {
    const env = environment.API_ENDPOINT;
    return this.http.put('${env}${path}', JSON.stringify(body), { headers: this.setHeaders() })
    .catch(this.formatErrors)
    .map((res: Response) => res.json());
  }

  post(path: string, body: Object = {}): Observable<any> {
    const env = environment.API_ENDPOINT;
    return this.http.post('${env}${path}', JSON.stringify(body), { headers: this.setHeaders() })
    .catch(this.formatErrors)
    .map((res: Response) => res.json());
  }

  delete(path: string): Observable<any> {
    const env = environment.API_ENDPOINT;
    return this.http.delete('${env}${path}', { headers: this.setHeaders()})
    .catch(this.formatErrors)
    .map((res: Response) => res.json());
  }

  private requestInterceptor(): void {
    console.log('Sending Request');
    this.loading.next({
        loading: true, hasError: false, hasMsg: ''
    });
  }

  private onSubscribeSuccess(res: Response): void {
    this.loading.next({
        loading: false, hasError: false, hasMsg: ''
    });
  }

  private onSubscribeError(error: any): void {
      console.log('Something Went wrong while subscribing', error);

      this.loading.next({
      loading: false, hasError: true, hasMsg: 'Something went wrong'
      });
  }
}
