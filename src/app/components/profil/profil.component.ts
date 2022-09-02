import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  user?: User;
  isConnect = false;

  myForm = new FormGroup({
    id: new FormControl(),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    address: new FormControl(''),
    zipcode: new FormControl(''),
    city: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    phone: new FormControl(''),
  });

  imageSrc = 'assets/images/profil.jpg';
  constructor(private route: ActivatedRoute,private _userService: UserService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    console.log(id);
    this._userService.findById(id).subscribe(
      data => {
        this.user = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  showForm(){
    this.isConnect = true;
  }
  hideForm(){
    this.isConnect = false;
  }

  updateUser(){
        console.log(this.myForm);
        if (this.myForm.valid) {
          let updateUser : User = {
            id : this.myForm.get('id')?.value,
            lastname: this.myForm.get('lastname')?.value,
            firstname: this.myForm.get('firstname')?.value,
            address: this.myForm.get('address')?.value,
            zipcode: this.myForm.get('zipcode')?.value,
            city: this.myForm.get('city')?.value,
            email: this.myForm.get('email')?.value,
            password: this.myForm.get('password')?.value,
            phone: this.myForm.get('phone')?.value,
        };
        console.log(updateUser);
        this._userService.updateUser(updateUser).subscribe(
  
        data=>{
          console.log(data.id)
        }
        
        ); 
        
      }

  }
}
