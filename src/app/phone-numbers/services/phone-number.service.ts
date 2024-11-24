import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PhoneNumber, StatusRequest } from '../interface/phone-number';

@Injectable({
  providedIn: 'root',
})

export class PhoneNumberService {
  baseUri: string = '';
  constructor(private http: HttpClient) {}

  listPhoneNumbers(): Observable<PhoneNumber[]> {
    const url = `${environment.apiUrl}${environment.apiEndpoints.list}`;
    return this.http.get<PhoneNumber[]>(url).pipe(
      tap((data) => {
        return data;
      }),
      catchError((error) => {
        console.error('Error fetching phone numbers:', error);
        throw error;
      })
    );
  }

  filteredData(inputData: StatusRequest): Observable<{ data: PhoneNumber[] }> {
    const url = `${environment.apiUrl}${environment.apiEndpoints.filter}`;
    return this.http.post<{ data: PhoneNumber[] }>(url, { status: inputData });
  }
}
