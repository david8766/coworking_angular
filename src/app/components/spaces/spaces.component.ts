import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spaces',
  templateUrl: './spaces.component.html',
  styleUrls: ['./spaces.component.css']
})
export class SpacesComponent implements OnInit {

  imageSrc1 = 'assets/images/img1.jpg'
  imageSrc2 = 'assets/images/img2.jpg'
  imageSrc3 = 'assets/images/img3.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
