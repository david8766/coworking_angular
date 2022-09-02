import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {

  imageSrc = 'assets/images/logo.png';
  displayStyle = "none";

  form = new FormGroup( {
    email: new FormControl(''),
    password: new FormControl('')
  });

  isSubmitted  =  false;
  closeResult = '';
  isConnect = false;
  userConnect: any;
  errorLogin = false;


  constructor(private modalService: NgbModal,
    private router: Router, private formBuilder: FormBuilder, private _userService: UserService, private _authService: AuthService) {}
  
  ngOnInit(): void {
    console.log(this.userConnect);
    console.log(this.isConnect);
  }


  onSubmit(): void { 
    console.log(this.form);
        
        //console.log(this.myForm);
        if (this.form.valid) {
          let user : any = {
            email: this.form.get('email')?.value,
            password: this.form.get('password')?.value,
          };
        //console.log(adduser);
        this._userService.checkUser(user.email, user.password).subscribe(
  
        data=>{
          console.log(data)
          if (data != null) {
            this.errorLogin = false;
            this._authService.seConnecter(data);
            this.isConnect = this._authService.estConnecte();
  
            this._userService.findById(data.id).subscribe(
              data => {
                this.userConnect = data;
                console.log(data);
              },
              error => {
                console.log(error);
              }
            );  
          } else {
            this.errorLogin = true;
            console.log(this.errorLogin);
          }
        }
        
        ); 
        
      } 
  }

  seDeco(){
    this._authService.deconnecter();
    window.location.reload();
  }

  //--------------------------------------------------------------------
  // Fenêtre modale
  //--------------------------------------------------------------------
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  //------------------------------------------------------------------------
 

}
