import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
//Construir una validaciones que trabajen en grupo
import { UserService } from '../../Services/user.service'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup  //Permite indicarle a angular que el formulario debe aplicar a las validaciones se craran

  //Funcion principal que tiene todas las clases 
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService 
  ) {
    this.validator()
  }

  ngOnInit(): void {
  }


  //Funcion de la clase
  validator() {
    //De esta clase quiero utilizar la variable signUpForm
    //this. acceder o llamar a una variable
    this.signUpForm = this.formBuilder.group({
      //validaciones
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', Validators.required],
      role: ['programador', Validators.required],
      tipo: ['free', Validators.required],

    })
  }
  
  saveUser() {
    if (this.signUpForm.valid) {
      this.userService.createUser(this.signUpForm.value).subscribe(
        (userCreated)=>{
          console.log(userCreated)
          alert('Registro Exitoso')
        },
        (error)=>{
          console.error('Tuvimos un Error ->',error)
        }
      )
    } else {
      alert('Registro NO Exitoso')
    }
  }
}
