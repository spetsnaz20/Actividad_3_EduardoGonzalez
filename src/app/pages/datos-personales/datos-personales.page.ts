import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.page.html',
  styleUrls: ['./datos-personales.page.scss'],
})
export class DatosPersonalesPage implements OnInit {


    nombre ='Eduardo González';
    localidad='Daimiel';
    curso ='2ºDAM';
    email='edu_balonmano619@hotmail.com';
    password='Alumno2dam';
  constructor() { }

  ngOnInit() {
  }

}
