import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  audio = new Audio();

  constructor() { }

  ngOnInit() {
  }

  numero_sound(numero) {
    console.log('../../../../assets/sounds/' + numero + '.mp3');
    this.audio = new Audio();
    this.audio.src = '../../../../assets/sounds/numeros/' + numero + '.mp3';
    this.audio.load();
    this.audio.play();
  }
}
