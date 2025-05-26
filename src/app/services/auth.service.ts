import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login, Register, UserAuth } from '../shared/interfaces/auth';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl + '/api/auth';

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) { }

  login(credentials: Login): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(
      `${this.apiUrl}/login`,
      credentials,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    );
  }

  register(userData: Register): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(
      `${this.apiUrl}/register`,
      userData,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    );
  }
}
