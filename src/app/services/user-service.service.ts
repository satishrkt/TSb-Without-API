import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { GetEvent } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public apiUrl = `${environment.apiUrl}`;
  public spinnerCounter = new BehaviorSubject<number>(0);
  spinnerCounter$ = this.spinnerCounter.asObservable();

  constructor(private http: HttpClient) { }

  showSpinner() {
    this.spinnerCounter.next(this.spinnerCounter.value + 1);
  }

  hideSpinner() {
    this.spinnerCounter.next(this.spinnerCounter.value - 1);
  }

  getEventDetails(data?: any): Observable<GetEvent[]> {
    let headers: any = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<GetEvent[]>(this.apiUrl + "web/getEventDetails", { eventId: data, employeeId: data, sessionId: data }, {headers: headers});
  }
}
