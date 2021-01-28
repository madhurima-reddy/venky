import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'; 
import {Observable,of} from 'rxjs';
import {IUser} from './iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string;
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
};

  constructor(private http:HttpClient) { }
  addUser(user:IUser):Observable<IUser>{​​​​  
    return this.http.post<IUser>(this.url + "/PostUser",user,this.httpOptions);
  }​​​​
}
