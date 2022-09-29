import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
declare var VANTA: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }


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
  }

  scrollToElement($element: any): void {
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
}
