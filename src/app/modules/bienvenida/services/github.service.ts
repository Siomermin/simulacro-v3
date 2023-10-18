import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private readonly githubApiUrl = 'https://api.github.com/users/siomermin';

  constructor(private http: HttpClient) {}

  getUser(): Observable<any> {
    return this.http.get<any>(this.githubApiUrl);
  }
}
