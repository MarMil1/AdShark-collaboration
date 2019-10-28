import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkfrontService {

  // private url = 'https://americanhotel.my.workfront.com/attask/api/v9.0/proj/5d4304eb0038bbdb4178b29cf02e8e3f'
  //                 + '?fields=parameterValues&apiKey=4pndzdk2yln90zhzxs5p86ustmjb7230';
  private cors = 'https://cors-anywhere.herokuapp.com/';
  private url = 'https://americanhotel.my.workfront.com/attask/api/v9.0/proj/';
  // private field = '?fields=parameterValues&apiKey=7qrv3g08cywv6hqmsmt6xei7xxdye4q1';
  private apiKey = '7qrv3g08cywv6hqmsmt6xei7xxdye4q1';
  projID: string;

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const params = new HttpParams()
    .append('apiKey', this.apiKey)
    .append('fields', 'parameterValues');

    return this.http.get<any>(this.cors + this.url + this.projID, { params });
  }

  updateData(data: object) {
    const updatedData = JSON.stringify(data);
    const params = new HttpParams()
    .append('apiKey', this.apiKey)
    .append('updates', updatedData);

    this.http.put(this.cors + this.url + this.projID, null, { params })
    .subscribe(val => {
      console.log('PUT call successful value returned in body', val);
      alert('sucess');
    }, response => {
      console.log('PUT call in error', response);
      alert('fail');
    }, () => {
      console.log('The PUT observable is now completed.');
    });
  }
  
}
