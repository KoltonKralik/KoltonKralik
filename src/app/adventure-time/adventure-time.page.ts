import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adventure-time',
  templateUrl: './adventure-time.page.html',
  styleUrls: ['./adventure-time.page.scss'],
})
export class AdventureTimePage implements OnInit {

  constructor(private router: Router,) { }
  toPage3 () {
    this.router.navigateByUrl('page3') 
  }

  ngOnInit() {
  }
ionViewDidEnter () { 
  window.alert ("Fabulous") 

}

}
