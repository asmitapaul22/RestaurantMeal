import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-featuredfood',
  templateUrl: './featuredfood.component.html',
  styleUrls: ['./featuredfood.component.css']
})
export class FeaturedfoodComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    AOS.init();
  }

}
