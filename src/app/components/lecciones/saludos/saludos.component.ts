import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludos',
  templateUrl: './saludos.component.html',
  styleUrls: ['./saludos.component.css']
})
export class SaludosComponent implements OnInit {

  audio = new Audio();

  constructor() { }

  ngOnInit() {
  }

  saludos_sound(saludo) {
    console.log('../../../../assets/sounds/' + saludo + '.mp3');
    this.audio = new Audio();
    this.audio.src = '../../../../assets/sounds/saludos/' + saludo + '.mp3';
    this.audio.load();
    this.audio.play();
  }

}
