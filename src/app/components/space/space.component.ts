import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Space } from 'src/app/shared/interfaces/space';
import { SpaceService } from 'src/app/shared/services/space.service';
import * as L from 'leaflet';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {

  imageSrc = 'assets/images/img1.jpg';
  
  public space?: Space;
  location?: Array<string>
  number?: number
  a: any
  b: any
  private ngAfterViewInit(any: any){};

  constructor(private route: ActivatedRoute,private _spaceService: SpaceService) { }

  
  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    console.log(id);
     
    this._spaceService.findById(id).subscribe(
      data => {
        this.space = data;
        this.location = data.location.split(",");
        this.a = parseFloat(this.location[0]);
        this.b = parseFloat(this.location[1]);
        this.ngAfterViewInit(this.loadMap());
        
      },
      error => {
        console.log(error);
      }
      );
      
    }

  
  private loadMap(): void {
    console.log(this.a)
    console.log(this.b)
    let map = L.map('map').setView([this.a, this.b], 10);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: environment.mapbox.accessToken,
    }).addTo(map);

    const icon = L.icon({
      iconUrl: 'https://res.cloudinary.com/rodrigokamada/image/upload/v1637581626/Blog/angular-leaflet/marker-icon.png',
      shadowUrl: 'https://res.cloudinary.com/rodrigokamada/image/upload/v1637581626/Blog/angular-leaflet/marker-shadow.png',
      popupAnchor: [13, 0],
    });

    const marker = L.marker([this.a, this.b], { icon });
    marker.addTo(map);

  }


}
