import { Injectable } from '@angular/core';
import { Http,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SearchService {
  baseUrl: string = './apidata/test.json';
  queryUrl: string = '?name=';
  constructor(private http: Http) { }
  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }
  searchEntries(term) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('id', term);
    return this.http
        .get(this.baseUrl,{
       search: params
     }).map(res => res.json().productList.filter(d => d.name.toLowerCase().indexOf(term) >= 0))

  }
}
