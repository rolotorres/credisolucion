import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/User.model';
import { URL_SERVICIOS } from '../config/config';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: User;

  constructor( public http: HttpClient ) { }
}


