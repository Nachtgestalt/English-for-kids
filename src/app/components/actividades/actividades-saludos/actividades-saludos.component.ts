import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-actividades-saludos',
  templateUrl: './actividades-saludos.component.html',
  styleUrls: ['./actividades-saludos.component.css']
})
export class ActividadesSaludosComponent implements OnInit {
  formulario: FormGroup;
  audio = new Audio();

  pregunta1 : string;
  pregunta2 : string;
  pregunta3 : string;

  constructor() {
    this. formulario = new FormGroup({
      'question1' : new FormControl(),
      'question2' : new FormControl(),
      'question3' : new FormControl(),
      'respuesta1' : new FormControl(),
      'respuesta2' : new FormControl(),
      'respuesta3' : new FormControl(),
    });
  }

  ngOnInit() {
  }

  saludos_sound(saludo) {
    this.audio = new Audio();
    this.audio.src = '../../../../assets/sounds/saludos/' + saludo + '.mp3';
    this.audio.load();
    this.audio.play();
  }

  validar() {
    if (this.formulario.controls['question1'].value === 'option2'){
      this.pregunta1 = 'correcto';
    } else{
      this.pregunta1 = 'incorrecto';
    }

    if (this.formulario.controls['question2'].value === 'option1'){
      this.pregunta2 = 'correcto';
    } else{
      this.pregunta2 = 'incorrecto';
    }

    if (this.formulario.controls['question3'].value === 'option1'){
      this.pregunta3 = 'correcto';
    } else{
      this.pregunta3 = 'incorrecto';
    }

    console.log(this.formulario.get('question1').value)
  }
}
