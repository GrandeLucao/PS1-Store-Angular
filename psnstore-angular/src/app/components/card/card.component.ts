import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  gameCover:string=""
  @Input()
  gameName:string=""
  @Input()
  gameRegion:string=""
  @Input()
  gamePrice:string=""
  @Input()
  gameLabel:string=""

}
