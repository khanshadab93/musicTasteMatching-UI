import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private baseUrl = '/api'; // ✅ should be proxied via proxy.conf.json to http://localhost:8080

  constructor(private http: HttpClient) {}

  // Register user -> backend returns plain text
  register(user: any): Observable<string> {
    return this.http.post(`${this.baseUrl}/users/register`, user, { responseType: 'text' });
  }

  // Add preference -> backend returns User
  addPreference(userId: string, preferences: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/${userId}/preferences`, preferences);
  }

  // Get matches -> backend expects UUID
  getMatches(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/match`, {
      params: { userId } // ✅ send userId as query param
    });
  }
}
