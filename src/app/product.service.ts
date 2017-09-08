import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private _Url: string = "assets/employeedata.json"
  constructor(private http: Http){}
  getProductList(){
    return this.http.get(this._Url)
    .map((res: Response) => res.json())
  }
}
