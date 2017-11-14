import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {

  audio = new Audio();

  constructor() { }

  ngOnInit() {
  }

  cuerpo_sound(parte) {
    console.log('../../../../assets/sounds/' + parte + '.mp3');
    this.audio = new Audio();
    this.audio.src = '../../../../assets/sounds/cuerpo/' + parte + '.mp3';
    this.audio.load();
    this.audio.play();
  }

}
