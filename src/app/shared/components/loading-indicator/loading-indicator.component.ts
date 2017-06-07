import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../../../core/services/http';
import { ApiService } from '../../../core/services/api.service';
@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})

export class LoadingIndicatorComponent {
  loading$: Observable<{loading: false, error: false}>;

  constructor(
    // private httpInterceptor: HttpService
    private httpInterceptor: ApiService
  ) {
    this.loading$ = this.httpInterceptor.loading;
  }
}
