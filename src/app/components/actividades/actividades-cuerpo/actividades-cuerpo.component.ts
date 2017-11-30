import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-actividades-cuerpo',
  templateUrl: './actividades-cuerpo.component.html',
  styleUrls: ['./actividades-cuerpo.component.css']
})
export class ActividadesCuerpoComponent implements OnInit {

  formulario: FormGroup;
  audio = new Audio();

  pregunta1 : string;
  pregunta2 : string;
  pregunta3 : string;
  pregunta4 : string;
  pregunta5 : string;

  constructor() { 
    this. formulario = new FormGroup({
      'question1' : new FormControl(),
      'question2' : new FormControl(),
      'question3' : new FormControl(),
      'question4' : new FormControl(),
      'question5' : new FormControl(),
      'respuesta1' : new FormControl(),
      'respuesta2' : new FormControl(),
      'respuesta3' : new FormControl(),
      'respuesta4' : new FormControl(),
      'respuesta5' : new FormControl(),
    });
  }

  ngOnInit() {
  }

  cuerpo_sound(parte) {
    console.log('../../../../assets/sounds/' + parte + '.mp3');
    this.audio = new Audio();
    this.audio.src = '../../../../assets/sounds/cuerpo/' + parte + '.mp3';
    this.audio.load();
    this.audio.play();
  }

  validar() {
    if (this.formulario.controls['question1'].value === 'option1'){
      this.pregunta1 = 'correcto';
    } else{
      this.pregunta1 = 'incorrecto';
    }

    if (this.formulario.controls['question2'].value === 'option3'){
      this.pregunta2 = 'correcto';
    } else{
      this.pregunta2 = 'incorrecto';
    }

    if (this.formulario.controls['question3'].value === 'option2'){
      this.pregunta3 = 'correcto';
    } else{
      this.pregunta3 = 'incorrecto';
    }

    if (this.formulario.controls['question4'].value === 'option2'){
      this.pregunta4 = 'correcto';
    } else{
      this.pregunta4 = 'incorrecto';
    }

    if (this.formulario.controls['question5'].value === 'option1'){
      this.pregunta5 = 'correcto';
    } else{
      this.pregunta5 = 'incorrecto';
    }
    console.log(this.formulario.get('question1').value)
  }

}
