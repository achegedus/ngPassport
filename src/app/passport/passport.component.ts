import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-passport',
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.scss']
})
export class PassportComponent implements OnInit {

  private oAuthURL = "http://apipassport.dev/oauth/token";

  private accessToken = []; // variable to store the access token
  private headers = new HttpHeaders; // headers for each request
  //private options = new RequestOptions({ headers: this.headers });

  private postData = {
    grant_type: "password",
    client_id: 2,
    client_secret: "cYVDLzZgesoJTjezrY1shZgwD4GPS48Ogv8Ske6Y",
    username: "adam@heged.us",
    password: "secret"
  }

  constructor(private http: HttpClient) { 
    // all headers for JSON requests
    this.headers.set('Content-Type', 'application/json');
    this.headers.set('Accept', 'application/json');
  }

  ngOnInit() {
    this.getToken();
  }

  getToken() {
    this.http.post(this.oAuthURL, this.postData, {headers: this.headers})
      .subscribe();
  }

}
