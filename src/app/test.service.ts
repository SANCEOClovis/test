import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  private readonly apiUrl = 'https://backend-api-production-e8c0.up.railway.app/test';

  private readonly http = inject(HttpClient);

  getData(): Observable<string> {
    return this.http.get<string>(this.apiUrl, { responseType: 'text' as 'json' });
  }
}
