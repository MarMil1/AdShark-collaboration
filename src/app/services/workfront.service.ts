import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class WorkfrontService {
  projID: string;

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(API_URL + '/proj/' + this.projID);
  }

  updateData(data: object) {
    const options = {responseType: 'text' as 'json'};
    return this.http.put(API_URL + '/proj/' + this.projID + '/update', data, options);
  }

}
