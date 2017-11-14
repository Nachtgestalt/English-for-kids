import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {

  audio = new Audio();

  constructor() { }

  ngOnInit() {
  }

  color_sound(color) {
    console.log('../../../../assets/sounds/' + color + '.mp3');
    this.audio = new Audio();
    this.audio.src = '../../../../assets/sounds/' + color + '.mp3';
    this.audio.load();
    this.audio.play();
  }
  
}
