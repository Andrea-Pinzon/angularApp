import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  image:string;
  texto:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  nombre= "Vito";
  //solo es valido un constructor en todo el archivo?

  // constructor(){
  //   setInterval(() => this.nombre= 'Martin', 5000);
  // }

  getSuma(num: number, num2: number){
    return num+num2;
  }

  textPlaceHolder= "Escriba su nombre aqui:";
  error= true;
  constructor(){
    setInterval(() => this.error = false, 5000);
  }

  img ="https://i.imgur.com/urMoyGG.jpg";

  texto="Este es un texto de prueba.";




//componente card
  title = 'Mi App* de Angular';
  public ArregloTarjetas: Tarjeta[]=[];

  ngOnInit(): void {
    this.ArregloTarjetas = [
      {titulo:'Video 1', subtitulo: "Subtitulo Video 1" ,image:"https://i.imgur.com/2WLjDDX.png", texto: "Texto 1 por aqui Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, reiciendis."},
      {titulo:'Video 2', subtitulo: "Subtitulo Video 2" ,image:"https://i.imgur.com/lnuEsnX.png", texto: "Texto 2 por aqui"},
      {titulo:'Video 3', subtitulo: "Subtitulo Video 3" ,image:"https://i.imgur.com/F07o6bR.png", texto: "Texto 3 por aqui"},
      {titulo:'Video 4', subtitulo: "Subtitulo Video 4" ,image:"https://i.imgur.com/5EasX67.png", texto: "Texto 4 por aqui"},
      {titulo:'Video 5', subtitulo: "Subtitulo Video 5" ,image:"https://i.imgur.com/d7aKm9K.png", texto: "Texto 5 por aqui"}
    ]
  }
}
