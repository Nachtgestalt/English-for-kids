import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abecedario',
  templateUrl: './abecedario.component.html',
  styleUrls: ['./abecedario.component.css']
})
export class AbecedarioComponent implements OnInit {

  audio = new Audio();

  constructor() { }

  ngOnInit() {
  }

  abecedario_sound(letra) {
    console.log('../../../../assets/sounds/' + letra + '.mp3');
    this.audio = new Audio();
    this.audio.src = '../../../../assets/sounds/abecedario/' + letra + '.mp3';
    this.audio.load();
    this.audio.play();
  }
}
