import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import * as THREE from 'three';
declare var VANTA: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  award_isLoad = true;
  allaward = new Array();

  constructor(public UserService: UserService) { }

  ngOnInit(): void {
    VANTA.NET({
      el: "#home_header_section",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x2281b6,
      backgroundColor: 0x232524,
      maxDistance: 23.00,
      spacing: 17.00,
      THREE: THREE
    })

    this.UserService.getAllAward().subscribe((data) => {
      if (data.award.length > 0) {
        this.allaward = data.award;
        this.award_isLoad = false;
      }
    })
  }

  scrollToElement($element: any): void {
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
}
