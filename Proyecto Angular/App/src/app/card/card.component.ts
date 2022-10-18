import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image?:string;
  public Titulo:string = "Titulo en una variable";
  @Input() dataEntrante:any; 
  constructor() { }

  ngOnInit(): void {
    this.image = "https://i.imgur.com/urMoyGG.jpg";
  }

}