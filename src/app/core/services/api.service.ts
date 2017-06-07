import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { Headers, Http, Response, URLSearchParams, RequestOptionsArgs } from '@angular/http';
import { Observable }  from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {
  constructor(
    private http: Http,
  ) {}

  private setHeaders(options?: RequestOptionsArgs): Headers {
    const headersConfig = {
      'content-type': 'application/json',
      'Accept': 'application/json'
    };

    if (options.headers == null) {
      const user = localStorage.getItem('user') != "undefined" ? JSON.parse(localStorage.getItem('user')) : null;

      headersConfig['X-Spree-Token'] = user && user.spree_api_key

      options = headersConfig;
    }

    return new Headers(options);
  }

  private formatErrors(error: any) {
    return Observable.throw(error.json());
  }

  get(path: string, params: URLSearchParams = new URLSearchParams() ): Observable<any> {
    const env = environment.API_ENDPOINT;
    return this.http.get('${env}${path}', { headers: this.setHeaders(), search: params})
    .catch(this.formatErrors)
    .map((res: Response) => res.json());
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
}
