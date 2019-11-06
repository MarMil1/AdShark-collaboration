import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class WorkfrontService {

  // private cors = 'https://cors-anywhere.herokuapp.com/';
  // private url = 'https://americanhotel.my.workfront.com/attask/api/v9.0/proj/';
  // private apiKey = '7qrv3g08cywv6hqmsmt6xei7xxdye4q1';
  projID: string;

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    // const params = new HttpParams()
    // .append('apiKey', this.apiKey)
    // .append('fields', 'parameterValues');
    // return this.http.get<any>(this.cors + this.url + this.projID, { params });
    return this.http.get(API_URL + '/proj/' + this.projID);
  }

  updateData(data: object) {
    console.log(data);
    const options = {responseType: 'text' as 'json'};
    return this.http.put(API_URL + '/proj/' + this.projID + '/update', data, options);

    // const updatedData = JSON.stringify(data);
    // const params = new HttpParams()
    // .append('apiKey', this.apiKey)
    // .append('updates', updatedData);

    // this.http.put(this.cors + this.url + this.projID, null, { params })
    // .subscribe(val => {
    //   console.log('PUT call successful value returned in body', val);
    //   alert('sucess');
    // }, response => {
    //   console.log('PUT call in error', response);
    //   alert('fail');
    // }, () => {
    //   console.log('The PUT observable is now completed.');
    // });
  }

}
