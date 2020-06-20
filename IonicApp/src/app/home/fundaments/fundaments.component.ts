import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundaments',
  templateUrl: './fundaments.component.html',
  styleUrls: ['./fundaments.component.scss'],
})
export class FundamentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  
nombre:string;
apellido:string;
edad:number;

estudiantes:Estudiante[];



crearEstudiante(){
  this.estudiantes.push(
    {
      nombre:this.nombre,
      apellidos:this.apellido,
      edad:this.edad,
    });
}

}

//Mpdelo
interface Estudiante{
  nombre:string;
  apellidos:string;
  edad:number;
}