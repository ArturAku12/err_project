import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

interface ApiResponse {
  data: any;
  apiVersion: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  private http = inject(HttpClient);

  private apiUrl =
    'https://services.err.ee/api/v2/category/getByUrl?url=video&domain=jupiter.err.ee';

  getData() {
    return this.http.get<ApiResponse>(this.apiUrl);
  }
}
