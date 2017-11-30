import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-actividades-animales',
  templateUrl: './actividades-animales.component.html',
  styleUrls: ['./actividades-animales.component.css']
})
export class ActividadesAnimalesComponent implements OnInit {

  formulario: FormGroup;
  color1 : string;
  color2 : string;
  color3 : string;
  color4 : string;
  color5 : string;
  color6 : string;
  color7 : string;
  color8 : string;
  color9 : string;


  constructor() { 
    this.formulario = new FormGroup({
      'pregunta1' : new FormControl(),
      'respuesta1' : new FormControl(),
      'pregunta2' : new FormControl(),
      'respuesta2' : new FormControl(),
      'pregunta3' : new FormControl(),
      'respuesta3' : new FormControl(),
      'pregunta4' : new FormControl(),
      'respuesta4' : new FormControl(),
      'pregunta5' : new FormControl(),
      'respuesta5' : new FormControl(),
      'pregunta6' : new FormControl(),
      'respuesta6' : new FormControl(),
      'pregunta7' : new FormControl(),
      'respuesta7' : new FormControl(),
      'pregunta8' : new FormControl(),
      'respuesta8' : new FormControl(),
      'pregunta9' : new FormControl(),
      'respuesta9' : new FormControl()
    });


    this.formulario.controls['pregunta1'].valueChanges.subscribe(data => {
      if(data === 'giraffe'){
        this.color1 = 'green'
        this.formulario.controls['respuesta1'].setValue('Correcto!');
      } else {
        this.color1 = 'red'
        this.formulario.controls['respuesta1'].setValue('Incorrecto!');
      }
      console.log(data);
    });

    this.formulario.controls['pregunta2'].valueChanges.subscribe(data => {
      if(data === 'monkey'){
        this.color2 = 'green'
        this.formulario.controls['respuesta2'].setValue('Correcto!');
      } else{
        this.color2 = 'red'
        this.formulario.controls['respuesta2'].setValue('Incorrecto!');
      }
      console.log(data);
    });

    this.formulario.controls['pregunta3'].valueChanges.subscribe(data => {
      if(data === 'bear'){
        this.color3 = 'green'
        this.formulario.controls['respuesta3'].setValue('Correcto!');
      } else{
        this.color3 = 'red'
        this.formulario.controls['respuesta3'].setValue('Incorrecto!');
      }
      console.log(data);
    });

    this.formulario.controls['pregunta4'].valueChanges.subscribe(data => {
      if(data === 'whale'){
        this.color4 = 'green'
        this.formulario.controls['respuesta4'].setValue('Correcto!');
      } else{
        this.color4 = 'red'
        this.formulario.controls['respuesta4'].setValue('Incorrecto!');
      }
      console.log(data);
    });

    this.formulario.controls['pregunta5'].valueChanges.subscribe(data => {
      if(data === 'tiger'){
        this.color5 = 'green'
        this.formulario.controls['respuesta5'].setValue('Correcto!');
      } else{
        this.color5 = 'red'
        this.formulario.controls['respuesta5'].setValue('Incorrecto!');
      }
      console.log(data);
    });

    this.formulario.controls['pregunta6'].valueChanges.subscribe(data => {
      if(data === 'lion'){
        this.color6 = 'green'
        this.formulario.controls['respuesta6'].setValue('Correcto!');
      } else{
        this.color6 = 'red'
        this.formulario.controls['respuesta6'].setValue('Incorrecto!');
      }
      console.log(data);
    });

    this.formulario.controls['pregunta7'].valueChanges.subscribe(data => {
      if(data === 'rhinoceros'){
        this.color7 = 'green'
        this.formulario.controls['respuesta7'].setValue('Correcto!');
      } else{
        this.color7 = 'red'
        this.formulario.controls['respuesta7'].setValue('Incorrecto!');
      }
      console.log(data);
    });

    this.formulario.controls['pregunta8'].valueChanges.subscribe(data => {
      if(data === 'elephant'){
        this.color8 = 'green'
        this.formulario.controls['respuesta8'].setValue('Correcto!');
      } else{
        this.color8 = 'red'
        this.formulario.controls['respuesta8'].setValue('Incorrecto!');
      }
      console.log(data);
    });

    this.formulario.controls['pregunta9'].valueChanges.subscribe(data => {
      if(data === 'gorilla'){
        this.color9 = 'green'
        this.formulario.controls['respuesta9'].setValue('Correcto!');
      } else{
        this.color9 = 'red'
        this.formulario.controls['respuesta9'].setValue('Incorrecto!');
      }
      console.log(data);
    });

  }

  ngOnInit() {
  }

}
