import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  numero?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Mi App* de Angular';
  public ArregloTarjetas: Tarjeta[]=[];

  ngOnInit(): void {

    this.ArregloTarjetas = [
      {titulo:'Video 1', subtitulo: "Subtitulo Video 1", numero:5},
      {titulo:'Video 2', subtitulo: "Subtitulo Video 2"},
      {titulo:'Video 3', subtitulo: "Subtitulo Video 3", numero:7},
      {titulo:'Video 4', subtitulo: "Subtitulo Video 4", numero:8}
    ]
  }
}
