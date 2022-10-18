import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image2:string ="https://i.imgur.com/urMoyGG.jpg";
  public Titulo:string = "Titulo en una variable";
  constructor() { }

  ngOnInit(): void {
  }

}
