import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent  {

  user?: User;
  userId?: Number;

  myForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    address: new FormControl(''),
    zipcode: new FormControl(''),
    city: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    phone: new FormControl(''),
  });

  imageSrc = 'assets/images/register.jpg';

  constructor(private _userService: UserService, private router: Router) { }

  onSubmit(){
    //console.log(this.myForm);
    if (this.myForm.valid) {
        let adduser : User = {
          id : 0,
          lastname: this.myForm.get('lastname')?.value,
          firstname: this.myForm.get('firstname')?.value,
          address: this.myForm.get('address')?.value,
          zipcode: this.myForm.get('zipcode')?.value,
          city: this.myForm.get('city')?.value,
          email: this.myForm.get('email')?.value,
          password: this.myForm.get('password')?.value,
          phone: this.myForm.get('phone')?.value,
      };
      //console.log(adduser);
      this._userService.createUser(adduser).subscribe(

      data=>{
        console.log(data.id)
        
        this.router.navigate(
          ['/profil/', data.id], 
        );
      }
      
      ); 
      
    }
  }

}
