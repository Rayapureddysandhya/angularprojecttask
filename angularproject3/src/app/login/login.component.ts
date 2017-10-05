import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

// Retrieve

  constructor() { }
contactMethods=[{id:1,m:"Student"},{id:2,m:"Employee"},{id:2,m:"Manager"}];
 submit(f){
   console.log(f.value.email);
   console.log(f.value.psw);
   console.log(f.value.contactMethod);
   
 }

  ngOnInit() {
  }

}
