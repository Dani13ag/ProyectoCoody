import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, FormGroup, Validators} from '@angular/forms'
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService
  ) { 
    this.validator()
  }

  ngOnInit(): void {
  }

  validator(){
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      this.userService.login(this.loginForm.value).subscribe(
        (dataUser)=>{
          console.log(dataUser['token'])
        },
        (error)=>{
          console.error('Error->', error)
        }
      )
     
    }else{
      alert('Debes llenar todos los campos.')
    }
  }

}
