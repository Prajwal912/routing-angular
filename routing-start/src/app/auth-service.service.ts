import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isLoggedIn = false
  constructor() { }

isAuthenticated(){
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
     resolve(this.isLoggedIn)
  },800)
})
return promise
}
login(){
  this.isLoggedIn = true
}
logout(){
  this.isLoggedIn = false
}
}
