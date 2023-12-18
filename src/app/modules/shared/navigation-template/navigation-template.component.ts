import { Component, OnInit } from '@angular/core';
import {primaryUrls} from "../../../helpers/urls";

@Component({
  selector: 'app-navigation-template',
  templateUrl: './navigation-template.component.html',
  styleUrls: ['./navigation-template.component.scss']
})
export class NavigationTemplateComponent implements OnInit {
  public sidenav_opened: boolean = false;
  public navLinks = primaryUrls;
  public currentDate = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
