import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {

  audio = new Audio();

  constructor() { }

  ngOnInit() {
  }

  animal_sound(animal) {
    console.log('../../../../assets/sounds/' + animal + '.mp3');
    this.audio = new Audio();
    this.audio.src = '../../../../assets/sounds/animals/' + animal + '.mp3';
    this.audio.load();
    this.audio.play();
  }

}
