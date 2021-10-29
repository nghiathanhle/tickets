import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Technician } from '../models/technician-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketServicesService {
  constructor( private http: HttpClient ) { }

  getTechniciansAndStoreToLocalStorage(){
    let users: any;
    this.http.post<any>('https://us-central1-ntl-fb.cloudfunctions.net/getTechnicians',{}).subscribe(data => {  
        // console.log(data.data);
        localStorage.setItem('users', JSON.stringify(data.data))
        users = data.data;
    });
  }
}