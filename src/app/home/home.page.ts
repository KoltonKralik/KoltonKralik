import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
  ) { }

  toHome() { }
  toPage2() {
    this.router.navigateByUrl('adventure-time')

  }
  
  audioEnter () {
    console.log("enter");
    let song = new Audio()
    song.src = "../../assets/Sharpay, Ryan - Fabulous (from High School Musical 2) (Official Video).mp3"
    song.load()
    song.play()
    console.log(song)
  }
}