import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService } from '../../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = `${this.config.apiEndpoint}/api/users`;

  constructor(
    private config: ConfigService,
    private http: HttpClient
  ) { }

  getUsers(page: number) {
    const params = new HttpParams()
      .set('page', page)

    return this.http.get<any>(this.url, {params: params});
  }
}
