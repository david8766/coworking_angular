import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  validate = false;
  
  myForm = new FormGroup({
    id: new FormControl(this.user?.id),
    firstname: new FormControl(this.user?.firstname),
    lastname: new FormControl(this.user?.lastname),
    address: new FormControl(this.user?.address),
    zipcode: new FormControl(this.user?.zipcode),
    city: new FormControl(this.user?.city),
    email: new FormControl(this.user?.email),
    password: new FormControl(this.user?.password),
    phone: new FormControl(this.user?.phone),
  });
  
  imageSrc = 'assets/images/profil.jpg';
  constructor(private route: ActivatedRoute,private _userService: UserService,private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    console.log(id);
    this._userService.findById(id).subscribe(
      data => {
        this.user = data;
        //console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  showForm(){
    this.isConnect = true;
    this.myForm = new FormGroup({
      id: new FormControl(this.user?.id),
      firstname: new FormControl(this.user?.firstname),
      lastname: new FormControl(this.user?.lastname),
      address: new FormControl(this.user?.address),
      zipcode: new FormControl(this.user?.zipcode),
      city: new FormControl(this.user?.city),
      email: new FormControl(this.user?.email),
      password: new FormControl(this.user?.password),
      phone: new FormControl(this.user?.phone),
    });
  
  }
  hideForm(){
    this.isConnect = false;
  }

  updateUser(){
        //console.log(this.myForm);
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
          //console.log(data.id);
          this.validate = true;
          setTimeout(() => {
            this.hideForm();
            this.validate = false;
            console.log("Retardée d'une seconde.");
          }, 1000);
          this.ngOnInit();
          }
        ); 
        
      }

  }
}
