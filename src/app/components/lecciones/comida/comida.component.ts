import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ComidaComponent implements OnInit {

  audio = new Audio();

  constructor() { }

  ngOnInit() {
  }

  comida_sound(comida) {
    console.log('../../../../assets/sounds/' + comida + '.mp3');
    this.audio = new Audio();
    this.audio.src = '../../../../assets/sounds/comida/' + comida + '.mp3';
    this.audio.load();
    this.audio.play();
  }

}
