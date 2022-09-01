import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isFav = false;
  isWish=false;

  constructor() { }

  ngOnInit(): void {
  }
  public fillfav()
  {
    this.isFav=! this.isFav;
  }
  public fillwish()
  {
    this.isWish = ! this.isWish;

  }

  b: any[]=[
    {
      title: 'dfsda',
      author: 'dhfbgf',
      rating:5
    },
    {
      title: 'dfsda',
      author: 'dhfbgf',
      rating:5
    },
    {
      title: 'dfsda',
      author: 'dhfbgf',
      rating:5
    },
    {
      title: 'dfsda',
      author: 'dhfbgf',
      rating:5
    }
  ]

  auth: any[]=[
    {
      authorName: 'dfsda'
    },
    {
      authorName: 'dfsda'
    },
    {
      authorName: 'dfsda'
    },
    {
      authorName: 'dfsda'
    }
  ]
}
