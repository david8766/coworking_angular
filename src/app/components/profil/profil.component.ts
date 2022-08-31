import { Component, OnInit } from '@angular/core';
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

}
