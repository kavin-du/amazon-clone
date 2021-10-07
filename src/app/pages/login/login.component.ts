import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    // creating the form
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {
  }
  
  // createForm() {
  //   this.loginForm = this.fb.group({
  //     email: [''],
  //     password: [''],
  //   });
  // }

  signIn() {
    console.log('values ', this.loginForm.value.email, ' password ', this.loginForm.value.password);
    
  }

  createAccount(){
    
  }
}
