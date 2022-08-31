import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Space } from 'src/app/shared/interfaces/space';
import { SpaceService } from 'src/app/shared/services/space.service';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {

  imageSrc = 'assets/images/img1.jpg';
  
  public space?: Space;

  constructor(private route: ActivatedRoute,private _spaceService: SpaceService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']; 
    console.log(id);
    this._spaceService.findById(id).subscribe(
      data => {
        this.space = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );

  }


}
