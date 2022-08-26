import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {

  imageSrc = 'assets/images/img1.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
