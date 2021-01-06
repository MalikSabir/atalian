import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  public host=window.location.hostname;
  public port = window.location.port;
  constructor(private http :HttpClient, private router : Router) { }

// back api path declering
private _getOrders = "http://"+this.host+":3000/api/getOrders";
private _getOneOrder = "http://"+this.host+":3000/api/getOneOrder";

/// Back api calling
getOrders(){
    return this.http.get<any>(this._getOrders)
  }
getOneOrder(){
  var id = localStorage.getItem("product_id");
    return this.http.post<any>(this._getOneOrder,{id})
}
 
}
