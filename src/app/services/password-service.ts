import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { env } from 'process';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  private apiUrl = 'https://api.api-ninjas.com/v1/passwordgenerator';
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  generatePassword(
    length: number,
    includeLowercase: boolean,
    includeUppercase: boolean,
    includeNumbers: boolean,
    includeSpecial: boolean,
  ): Observable<{ random_password: string }> {
    const headers = new HttpHeaders({
      'X-Api-Key': this.apiKey,
    });

    const params = new HttpParams()
      .set('length', length.toString())
      .set('exclude_numbers', (!includeNumbers).toString())
      .set('exclude_special_chars', (!includeSpecial).toString());

    console.log('🚀 REQUEST:');
    console.log('URL:', this.apiUrl);
    console.log('PARAMS:', params.toString());

    return this.http.get<{ random_password: string }>(this.apiUrl, { headers, params }).pipe(
      tap((res) => {
        console.log('✅ RESPONSE:', res);
      }),
    );
  }
}
