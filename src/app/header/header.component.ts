import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo = 'assets/img/logo.png';
  triconUrl="https://www.triconinfotech.com/";
  constructor() { }

  ngOnInit(): void {
  }

}
