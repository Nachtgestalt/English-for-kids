import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { FormControlName } from '@angular/forms/src/directives/reactive_directives/form_control_name';

@Component({
  selector: 'app-actividades-numeros',
  templateUrl: './actividades-numeros.component.html',
  styleUrls: ['./actividades-numeros.component.css']
})
export class ActividadesNumerosComponent implements OnInit {

  pregunta;

  audio = new Audio();
  formulario: FormGroup

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

  numeros_sound(number, group, option) {
    this.formulario.controls[group].setValue(option);
    this.audio = new Audio();
    this.audio.src = '../../../../assets/sounds/numeros/' + number + '.mp3';
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

    if (this.formulario.controls['question3'].value === 'option3'){
      this.pregunta3 = 'correcto';
    } else{
      this.pregunta3 = 'incorrecto';
    }

    if (this.formulario.controls['question4'].value === 'option2'){
      this.pregunta4 = 'correcto';
    } else{
      this.pregunta4 = 'incorrecto';
    }

    if (this.formulario.controls['question5'].value === 'option3'){
      this.pregunta5 = 'correcto';
    } else{
      this.pregunta5 = 'incorrecto';
    }
    console.log(this.formulario.get('question1').value)
  }

}
