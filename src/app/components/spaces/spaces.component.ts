import { Component, OnInit } from '@angular/core';
import { SpaceService } from 'src/app/shared/services/space.service';
import { Space } from 'src/app/shared/interfaces/space';

@Component({
  selector: 'app-spaces',
  templateUrl: './spaces.component.html',
  styleUrls: ['./spaces.component.css']
})
export class SpacesComponent implements OnInit {

  imageSrc1 = 'assets/images/img1.jpg'
  imageSrc2 = 'assets/images/img2.jpg'
  imageSrc3 = 'assets/images/img3.jpg'
  imageSrc4 = 'assets/images/img1.jpg'
  imageSrc5 = 'assets/images/img2.jpg'
  imageSrc6 = 'assets/images/img3.jpg'
  
  public spaces? : Space[];
  
  constructor(private _spaceService: SpaceService) { }

  ngOnInit(): void {
    this._spaceService.findAll().subscribe(
      data => {
        this.spaces = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
