import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { SpaceService } from 'src/app/shared/services/space.service';
import { Space } from 'src/app/shared/interfaces/space';


@Component({
  selector: 'app-spaces',
  templateUrl: './spaces.component.html',
  styleUrls: ['./spaces.component.css']
})
export class SpacesComponent implements OnInit,OnChanges {

  @Input() city : string ="";
  
  images: Array<String> = [
    'assets/images/img1.jpg',
    'assets/images/img2.jpg',
    'assets/images/img3.jpg',
    'assets/images/img4.jpg',
    'assets/images/img5.jpg',
    'assets/images/img6.jpg'
  ]
  
  public spaces? : Space[];
  
  constructor(private _spaceService: SpaceService) { }

  ngOnChanges(changes: SimpleChanges): void {
    
    this.selectCity(this.city);
  }

  ngOnInit(): void {

    this._spaceService.findAll().subscribe(
      data => {
        this.spaces = data;
        //console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  
  selectCity(selected: string){
    //console.log(selected);
    this._spaceService.findByCity(selected).subscribe(
      data => {
        this.spaces = data;
        //console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

 
}
