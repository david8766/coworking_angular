import { Component, OnInit, Output,Input,EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Space } from 'src/app/shared/interfaces/space';
import { SpaceService } from 'src/app/shared/services/space.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  spaceValue: string = "";

  imageSrc = 'assets/images/home.png';

  public cities?: String[];

  

  onCitySelected(selected: string) {
    this.spaceValue = selected;
  }

  constructor(private _spaceService: SpaceService) { }

  ngOnInit(): void {
    this._spaceService.findCities().subscribe(

      (data) => {

        this.cities = data;

        //console.log(data);

      },

      (error) => {

        console.log(error);

      }

    );
  }


}
