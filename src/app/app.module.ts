import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Routes=>Permite crear una const de tipo Routes
import { Routes, RouterModule} from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
//Permite crear formularios y poder validarlos
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { SignupComponent } from './Components/signup/signup.component';
import { SignUpCompanyComponent } from './Components/sign-up-company/sign-up-company.component';
import { from } from 'rxjs';
import { LoginComponent } from './Components/login/login.component';

const routesApp: Routes=[
  //crear rutas
  {path: '', component:HomeComponent},
  {path:'sign-up',component:SignupComponent },
  {path:'sign-up-company', component:SignUpCompanyComponent},
  {path:'login',component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    SignUpCompanyComponent,
    LoginComponent
  ],
  
  imports: [
    BrowserModule,
    /**
     * routerModule que cree las rutas que estan configuradas en la constante routesApp
     */
    RouterModule.forRoot(routesApp),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
