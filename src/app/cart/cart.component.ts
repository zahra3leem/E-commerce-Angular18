import { Component } from '@angular/core';
import { RatingPipe } from '../rating.pipe';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RatingPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
