import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent {
  @Input()
  gameName:string=""
  @Input()
  gameRegion:string=""
  @Input()
  gamePrice:string=""

}