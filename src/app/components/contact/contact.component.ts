import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  imageSrc = 'assets/images/mail.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
