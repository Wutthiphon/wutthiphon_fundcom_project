import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {
  page = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.page = "" + this.router.url;
  }

}
