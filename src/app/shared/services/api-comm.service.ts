import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ApiCommService {

  private REST_API_SERVER = "http://haddajibilel.pythonanywhere.com/ticker/IBM/300?format=json"

  constructor(private httpClient: HttpClient) { }

    public sendGetRequest(){
      return this.httpClient.get(this.REST_API_SERVER);
    }
}
