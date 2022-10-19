import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  event = {
    title: " New Years Day",
    date: "2023-01-01",
    bunting: true,
    notes: ""

  }

  days: number = 10

  constructor() { }

  ngOnInit() {
  }

}