import { Injectable } from '@angular/core';
import { DataService, DataServiceConfig } from './data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService extends DataService {

  constructor(httpClient: HttpClient) {
    const config: DataServiceConfig = {
      url: 'https://api.github.com/users/mosh-hamedani/followers' 
    };
    super(config, httpClient)
   }
}
